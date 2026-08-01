import { Plugin } from "@rons-org/core";
import transfer from "./actions/transfer";
import { initiaWalletProvider } from "./providers/wallet";

export const initiaPlugin: Plugin = {
    name: "initiaPlugin",
    description: "Initia Plugin for Rons",
    actions: [
        transfer,
    ],
    evaluators: [],
    providers: [initiaWalletProvider],
};
