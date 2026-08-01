import { IAgentRuntime, ronsLogger } from "@rons-org/core";
import { ClientBase } from "./base.ts";
import { DevaController } from "./controller";

export class DevaClient {
    private readonly runtime: IAgentRuntime;
    private readonly clientBase: ClientBase;
    private readonly controller: DevaController;

    constructor(runtime: IAgentRuntime, accessToken: string, baseUrl: string) {
        ronsLogger.log("📱 Constructing new DevaClient...");
        this.runtime = runtime;
        this.clientBase = new ClientBase(runtime, accessToken, baseUrl);
        this.controller = new DevaController(runtime, this.clientBase);
        ronsLogger.log("✅ DevaClient constructor completed");
    }

    public async start(): Promise<void> {
        ronsLogger.log("🚀 Starting DevaClient...");
        try {
            await this.controller.init();
            ronsLogger.log(
                "✨ DevaClient successfully launched and is running!"
            );
        } catch (error) {
            ronsLogger.error("❌ Failed to launch DevaClient:", error);
            throw error;
        }
    }
}
