import {
    type IAgentRuntime,
    type Memory,
    type Provider,
    type State,
    ronsLogger,
} from "@rons-org/core";
import { DEPLOYMENT_CONFIGS } from "../utils/constants.ts";

export const deploymentProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        ronsLogger.debug("deploymentProvider::get");
        const configs = Object.entries(DEPLOYMENT_CONFIGS)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
        return `The deployment configuration settings are:\n${configs}`;
    },
};
