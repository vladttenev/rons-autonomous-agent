import type { Plugin } from "@rons-org/core";
import { icpWalletProvider } from "./providers/wallet";
import { executeCreateToken } from "./actions/createToken";

export const icpPlugin: Plugin = {
    name: "icp",
    description: "Internet Computer Protocol Plugin for Rons",
    providers: [icpWalletProvider],
    actions: [executeCreateToken],
    evaluators: [],
};

export default icpPlugin;
