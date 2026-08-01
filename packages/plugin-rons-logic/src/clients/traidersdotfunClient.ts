import { type Client, ronsLogger, type IAgentRuntime } from "@rons-org/core";
import { TradingWorkflow } from "../workflows/tradingWorkflow";

export const RonsClientInterface: Client = {
    async start(runtime: IAgentRuntime) {
        ronsLogger.log("Rons client started");

        this.trading = new TradingWorkflow(runtime);

        // Start the trading workflow
        await this.trading.start();
    },

    async stop(_runtime: IAgentRuntime) {
        ronsLogger.warn("Rons client does not support stopping yet");
    },
};

export default RonsClientInterface;
