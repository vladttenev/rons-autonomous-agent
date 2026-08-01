import type { Plugin } from "@rons-org/core";

import { checkRewardAction, encryptAction, registerAction, submitVoteAction } from "./actions";

export const mindNetworkPlugin: Plugin = {
    name: "Mind Network",
    description: "Mind Network Plugin for Rons",
    actions: [checkRewardAction, encryptAction, registerAction, submitVoteAction],
    evaluators: [],
    providers: [],
};

export default mindNetworkPlugin;
