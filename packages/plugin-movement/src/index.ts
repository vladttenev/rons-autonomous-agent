import type { Plugin } from "@rons-org/core";
import transferToken from "./actions/transfer";
import { WalletProvider, walletProvider } from "./providers/wallet";

export { WalletProvider, transferToken as TransferMovementToken };

export const movementPlugin: Plugin = {
    name: "movement",
    description: "Movement Network Plugin for Rons",
    actions: [transferToken],
    evaluators: [],
    providers: [walletProvider],
};

export default movementPlugin;
