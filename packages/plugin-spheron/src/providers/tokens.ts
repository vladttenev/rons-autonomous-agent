import {
    type IAgentRuntime,
    type Memory,
    type Provider,
    type State,
    ronsLogger,
} from "@rons-org/core";
import { SUPPORTED_TOKENS } from "../utils/constants.ts";

export const tokensProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        ronsLogger.debug("tokensProvider::get");
        const tokens = Object.entries(SUPPORTED_TOKENS)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
        return `The supported tokens for Spheron operations are:\n${tokens}`;
    },
};
