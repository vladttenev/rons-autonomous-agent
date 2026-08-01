import { Client, IAgentRuntime, ronsLogger } from "@rons-org/core";
import { AlexaClient } from "./alexa-client";

export const AlexaClientInterface: Client = {
    start: async (runtime: IAgentRuntime) => {
        const alexaClient = new AlexaClient(runtime);

        await alexaClient.start();

        ronsLogger.success(
            `✅ Alexa client successfully started for character ${runtime.character.name}`
        );
        return alexaClient;
    },
    stop: async (runtime: IAgentRuntime) => {
        try {
            // stop it
            ronsLogger.log("Stopping alexa client", runtime.agentId);
            await runtime.clients.alexa.stop();
        } catch (e) {
            ronsLogger.error("client-alexa interface stop error", e);
        }
    },
};

export default AlexaClientInterface;
