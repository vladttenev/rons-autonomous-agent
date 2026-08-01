import { IAgentRuntime, Client, ronsLogger } from "@rons-org/core";
import { DevaClient } from "./devaClient.ts";
import { validateDevaConfig } from "./enviroment.ts";

export const DevaClientInterface: Client = {
    async start(runtime: IAgentRuntime) {
        await validateDevaConfig(runtime);

        const deva = new DevaClient(
            runtime,
            runtime.getSetting("DEVA_API_KEY"),
            runtime.getSetting("DEVA_API_BASE_URL")
        );

        await deva.start();

        ronsLogger.success(
            `✅ Deva client successfully started for character ${runtime.character.name}`
        );

        return deva;
    },
    async stop(_runtime: IAgentRuntime) {
        try {
            // Add cleanup logic here
              ronsLogger.warn("Deva client does not support stopping yet");
        } catch (error) {
            ronsLogger.error("Failed to stop Deva client:", error);
            throw error;
        }
    },
};

export default DevaClientInterface;
