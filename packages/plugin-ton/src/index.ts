import type { Plugin } from "@rons-org/core";
import transferAction from "./actions/transfer.ts";
import { WalletProvider, nativeWalletProvider } from "./providers/wallet.ts";

export { WalletProvider, transferAction as TransferTonToken };

export const tonPlugin: Plugin = {
    name: "ton",
    description: "Ton Plugin for Rons",
    actions: [transferAction],
    evaluators: [],
    providers: [nativeWalletProvider],
};

export default tonPlugin;
