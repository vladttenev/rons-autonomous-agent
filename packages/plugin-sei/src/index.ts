import type { Plugin } from "@rons-org/core";
import { evmWalletProvider } from "./providers/wallet.ts";

import { transferAction } from "./actions/transfer";

console.log("SEI IS BEING INITIALIZED")

export const seiPlugin: Plugin = {
    name: "sei",
    description: "Sei Plugin for Rons",
    actions: [transferAction],
    evaluators: [],
    providers: [evmWalletProvider],
};

export default seiPlugin;
