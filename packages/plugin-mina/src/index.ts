import type { Plugin } from "@rons-org/core";
import transferToken from "./actions/transfer.ts";
import faucetToken from "./actions/faucet.ts";
import balanceToken from "./actions/balance.ts";
import { WalletProvider, walletProvider } from "./providers/wallet.ts";

export {
    WalletProvider,
    transferToken as TransferMinaToken,
    faucetToken as FaucetMinaToken,
    balanceToken as BalanceMinaToken,
};

export const minaPlugin: Plugin = {
    name: "mina",
    description: "Mina Plugin for Rons",
    actions: [transferToken, faucetToken, balanceToken],
    evaluators: [],
    providers: [walletProvider],
};

export default minaPlugin;
