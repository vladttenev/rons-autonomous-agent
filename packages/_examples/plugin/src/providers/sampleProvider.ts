import {
    type Provider,
    type IAgentRuntime,
    type Memory,
    type State,
    ronsLogger,
} from "@rons-org/core";

export const sampleProvider: Provider = {
    // biome-ignore lint: 'runtime' is intentionally unused
    get: async (runtime: IAgentRuntime, message: Memory, state: State) => {
        // Data retrieval logic for the provider
        ronsLogger.log("Retrieving data in sampleProvider...");
    },
};
