import { Plugin } from "@rons-org/core";
import { holdstationWalletProvider } from "./providers/walletProvider";
import { swapAction } from "./actions/swapAction";

export const holdstationPlugin: Plugin = {
    name: "holdstation",
    description: "HoldStationWallet Plugin for Rons",
    providers: [holdstationWalletProvider],
    evaluators: [],
    services: [],
    actions: [swapAction],
};

export default holdstationPlugin;
