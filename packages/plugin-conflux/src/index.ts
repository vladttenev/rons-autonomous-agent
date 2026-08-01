import type { Plugin } from "@rons-org/core";
import { transfer } from "./actions/transfer";
import { bridgeTransfer } from "./actions/bridgeTransfer";
import { confiPump } from "./actions/confiPump";

export const confluxPlugin: Plugin = {
    name: "conflux",
    description: "Conflux Plugin for Rons",
    actions: [transfer, bridgeTransfer, confiPump],
    providers: [],
};
