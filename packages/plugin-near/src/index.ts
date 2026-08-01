import type { Plugin } from "@rons-org/core/src/types";
import { walletProvider } from "./providers/wallet";
// import { executeCreateToken } from "./actions/createToken";
import { executeSwap } from "./actions/swap";
import { executeTransfer } from "./actions/transfer";

export const nearPlugin: Plugin = {
    name: "NEAR",
    description: "Near Protocol Plugin for Rons",
    providers: [walletProvider],
    actions: [executeSwap, executeTransfer],
    evaluators: [],
};

export default nearPlugin;
