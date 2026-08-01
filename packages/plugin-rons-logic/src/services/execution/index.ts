import { ronsLogger } from "@rons-org/core";
import type { TokenResult } from "../../types/token";
import type { TradeDecision } from "../decisionMaker";
import type { TokenPair } from "../dexscreener/types";
import { BaseTradingService } from "../trading/base";
import { PonsTradingService } from "../trading/pons";
import { EXECUTION_CONFIG } from "./config";
import type { ExecutionResult, ExecutionServiceConfig } from "./types";

export class ExecutionService {
    private isDryRun: boolean;
    private ponsTradingService: PonsTradingService;
    private baseTradingService: BaseTradingService;

    constructor(config: ExecutionServiceConfig = {}) {
        this.isDryRun = config.isDryRun || false;
        this.ponsTradingService = new PonsTradingService();
        this.baseTradingService = new BaseTradingService();
    }

    private calculateBuyAmount(confidence: number): number {
        const { MIN_LEVEL, MAX_LEVEL } = EXECUTION_CONFIG.CONFIDENCE;
        const { MIN_BUY_AMOUNT, MAX_BUY_AMOUNT } = EXECUTION_CONFIG.TRADE;

        // Scale buy amount based on confidence
        const confidenceScale = (confidence - MIN_LEVEL) / (MAX_LEVEL - MIN_LEVEL);
        const amount = MIN_BUY_AMOUNT + (MAX_BUY_AMOUNT - MIN_BUY_AMOUNT) * confidenceScale;

        return Math.min(MAX_BUY_AMOUNT, Math.max(MIN_BUY_AMOUNT, amount));
    }

    private getTradingService(chain: string) {
        switch (chain.toLowerCase()) {
            case 'robinhood':
            case 'ethereum':
                return this.ponsTradingService;
            case 'base':
                return this.baseTradingService;
            default:
                // Default to Pons for EVM chains if not specified
                return this.ponsTradingService;
        }
    }

    async executeDecision(
        token: TokenResult,
        decision: TradeDecision,
        marketData: TokenPair[]
    ): Promise<ExecutionResult> {
        if (decision.confidence < EXECUTION_CONFIG.CONFIDENCE.MIN_LEVEL) {
            return {
                success: true,
                action: "HOLD",
                error: "Confidence too low",
                token,
                decision,
                marketData
            };
        }

        if (this.isDryRun) {
            ronsLogger.log(`[DRY RUN] Would execute ${decision.recommendation} for ${token.symbol}`, {
                confidence: decision.confidence,
                reasoning: decision.reasoning
            });
            return { 
                success: true, 
                action: decision.recommendation,
                token,
                decision,
                marketData
            };
        }

        try {
            const tradingService = this.getTradingService(token.chainId);
            
            switch (decision.recommendation) {
                case "BUY": {
                    const amount = this.calculateBuyAmount(decision.confidence);
                    const result = await tradingService.swapWithRetry({
                        fromToken: "ETH",
                        toToken: token.address,
                        amount,
                        slippage: EXECUTION_CONFIG.TRADE.SLIPPAGE
                    });
                    ronsLogger.log(`Executed BUY for ${token.symbol} (${amount} ETH)`);
                    return { 
                        success: true, 
                        action: "BUY", 
                        amount,
                        signature: result.signature,
                        token,
                        decision,
                        marketData
                    };
                }

                case "SELL": {
                    if (token.balance) {
                        const result = await tradingService.swapWithRetry({
                            fromToken: token.address,
                            toToken: "ETH",
                            amount: token.balance.amount,
                        });
                        ronsLogger.log(`Executed SELL for ${token.symbol}`);
                        return { 
                            success: true, 
                            action: "SELL", 
                            amount: token.balance.amount,
                            signature: result.signature,
                            token,
                            decision,
                            marketData
                        };
                    }
                    return { 
                        success: false, 
                        action: "SELL", 
                        error: "No balance",
                        token,
                        decision,
                        marketData
                    };
                }

                case "HOLD":
                    ronsLogger.log(`Holding position in ${token.symbol}`);
                    return { 
                        success: true, 
                        action: "HOLD",
                        token,
                        decision,
                        marketData
                    };
            }
        } catch (error) {
            ronsLogger.error(`Failed to execute ${decision.recommendation} for ${token.symbol}:`, error);
            return {
                success: false,
                action: decision.recommendation,
                error: error instanceof Error ? error.message : "Unknown error",
                token,
                decision,
                marketData
            };
        }
    }
}

export default ExecutionService; 