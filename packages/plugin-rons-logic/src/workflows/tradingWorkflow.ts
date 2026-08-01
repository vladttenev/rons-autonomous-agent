import { ronsLogger, type IAgentRuntime } from "@rons-org/core";
import { DecisionMakerService } from "../services/decisionMaker";
import { ExecutionService } from "../services/execution";
import { MoralisService } from "../services/moralis";
import { PortfolioService } from "../services/portfolio";
import { TokenAnalysisService } from "../services/tokenAnalysis";
import { TopWalletsService } from "../services/topwallets";
import { TwitterService } from "../services/twitter";
import { deduplicateTokens } from "../utils/token";
export class TradingWorkflow {
    private runtime: IAgentRuntime;
    private isProcessing = false;
    private stopProcessing = false;
    private readonly ANALYSIS_INTERVAL = 6 * 60 * 1000; // 6 minutes
    private isDryRun: boolean;

    private topWalletsService: TopWalletsService;
    private portfolioService: PortfolioService;
    private tokenAnalysisService: TokenAnalysisService;
    private decisionMakerService: DecisionMakerService;
    private executionService: ExecutionService;
    private twitterService?: TwitterService;
    private moralisService: MoralisService;

    constructor(runtime: IAgentRuntime) {
        this.runtime = runtime;
        this.isDryRun = process.env.RONS_DRY_RUN === "true";
        this.topWalletsService = TopWalletsService.getInstance();
        this.portfolioService = new PortfolioService();
        this.tokenAnalysisService = new TokenAnalysisService();
        this.decisionMakerService = new DecisionMakerService(runtime);
        this.executionService = new ExecutionService({
            isDryRun: process.env.RONS_DRY_RUN === "true",
            rpcUrl: process.env.SOLANA_RPC_URL,
        });
        this.moralisService = new MoralisService();

        // Initialize Twitter service
        TwitterService.getInstance(runtime).then((service) => {
            this.twitterService = service;
        });
    }

    async start() {
        ronsLogger.log("Starting trading workflow");
        this.runAnalysisLoop();
    }

    async stop() {
        ronsLogger.log("Stopping trading workflow");
        this.stopProcessing = true;
    }

    private async runAnalysisLoop() {
        if (this.isProcessing) {
            ronsLogger.log("Already processing trading analysis, skipping");
            return;
        }

        while (!this.stopProcessing) {
            try {
                this.isProcessing = true;

                // Fetch trending tokens and portfolio data in parallel
                const [
                    trendingTokens,
                    portfolioTokens,
                    experiencedBuyerTokens,
                ] = await Promise.all([
                    this.topWalletsService.getTopWalletsToken(),
                    this.portfolioService.getTokens(),
                    this.moralisService.getExperiencedBuyerTokens(),
                ]);

                // Combine and deduplicate tokens
                const tokensToAnalyze = deduplicateTokens([
                    ...portfolioTokens, // Portfolio tokens take priority
                    ...trendingTokens,
                ]);

                ronsLogger.log(
                    `Analyzing ${tokensToAnalyze.length} unique tokens`
                );

                // Analyze each token
                const analysisResults = await Promise.all(
                    tokensToAnalyze.map((token) =>
                        this.tokenAnalysisService.analyzeToken(token)
                    )
                );

                // Make trading decisions using complete analysis results
                const decisions = await Promise.all(
                    tokensToAnalyze.map((token, index) =>
                        this.decisionMakerService.analyzeToken(
                            token,
                            analysisResults[index]
                        )
                    )
                );

                // Log results and Post Thesis
                for (let index = 0; index < tokensToAnalyze.length; index++) {
                    const token = tokensToAnalyze[index];
                    const analysis = analysisResults[index];
                    const decision = decisions[index];
                    
                    if (!decision) continue;

                    ronsLogger.log(`Analysis for ${token.symbol}:`, {
                        pairs: analysis.marketAnalysis.length,
                        bestPrice: analysis.marketAnalysis[0]?.priceUsd,
                        socialMentions: analysis.socialAnalysis.length,
                        decision: decision.recommendation,
                        confidence: decision.confidence,
                        balance: token.balance,
                    });

                    if (decision.recommendation === "BUY" && decision.thesis) {
                        ronsLogger.log(`[RONS PIPELINE] Posting Thesis for ${token.symbol} to Fomo...`);
                        
                        // Fake Fomo post
                        ronsLogger.info(`FOMO POST: ${decision.thesis}`);
                        
                        // Notify via Twitter if available
                        if (this.twitterService) {
                            try {
                                await this.twitterService.postTweet(`Thesis on ${token.symbol}: ${decision.thesis}`);
                            } catch (e) {
                                ronsLogger.warn("Failed to post thesis to Twitter", e);
                            }
                        }
                    }
                }

                // Execute trading decisions (Buy/Sell)
                const executionResults = await Promise.all(
                    tokensToAnalyze.map((token, index) =>
                        this.executionService.executeDecision(
                            token,
                            decisions[index],
                            analysisResults[index].marketAnalysis
                        )
                    )
                );

                // Notify successful trades using the Twitter service
                if (this.twitterService) {
                    await this.twitterService.notifySuccessfulTrades(
                        executionResults
                    );
                }

                await new Promise((resolve) =>
                    setTimeout(resolve, this.ANALYSIS_INTERVAL)
                );
            } catch (error) {
                ronsLogger.error("Error in trading analysis loop");
                console.error(error);
                await new Promise((resolve) => setTimeout(resolve, 30000));
            } finally {
                this.isProcessing = false;
            }
        }
    }
}
