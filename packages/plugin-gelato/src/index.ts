import type { Plugin } from "@rons-org/core";

export * as actions from "./actions/index.ts";
import { contractInteractionAction } from "./actions/actionContractInteraction.ts";

export const gelatoPlugin: Plugin = {
    name: "Gelato",
    description: "Gelato plugin for Rons that relays transactions on chain",
    actions: [contractInteractionAction],
    evaluators: [],
    providers: [],
};
export default gelatoPlugin;
