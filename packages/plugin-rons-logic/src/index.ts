import type { Plugin } from "@rons-org/core";
import analyzeTweets from "./actions/analyzeTweets";
import RonsClientInterface from "./clients/ronsClient";

// Export the config validation for use by other modules
export {
    validateRonsConfig,
    type RonsConfig,
} from "./environment";

export const ronsPlugin: Plugin = {
    name: "rons",
    description: "DeFi trading plugin for Rons",
    clients: [RonsClientInterface],
    actions: [analyzeTweets],
    evaluators: [],
    services: [],
};

export default ronsPlugin;
