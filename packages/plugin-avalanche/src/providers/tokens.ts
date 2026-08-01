import {
    type IAgentRuntime,
    type Memory,
    type Provider,
    type State,
    ronsLogger,
} from "@rons-org/core";
import { TOKEN_ADDRESSES } from "../utils/constants";

const tokensProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        ronsLogger.debug("tokensProvider::get");
        const tokens = Object.entries(TOKEN_ADDRESSES)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
        return `The available tokens and their addresses are:\n${tokens}`;
    },
};

export { tokensProvider };
