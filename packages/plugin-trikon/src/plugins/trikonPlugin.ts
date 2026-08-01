import type { Plugin } from "@rons-org/core";
import transferAction from "../actions/trikon";
import walletProvider from "../providers/wallet";

export const trikonPlugin: Plugin = {
    name: "trikon",
    description: "Trikon Plugin for Rons",
    actions: [transferAction],
    providers: [walletProvider],
    evaluators: [],
    services: [],
    clients: [],
};

export default trikonPlugin;