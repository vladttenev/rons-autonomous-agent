import type { Plugin } from "@rons-org/core";
import transfer from "./actions/transfer";
import createToken from "./actions/createToken";
import swap from "./actions/swap";

export const multiversxPlugin: Plugin = {
    name: "multiversx",
    description: "MultiversX Plugin for Rons",
    actions: [transfer, createToken, swap],
    evaluators: [],
    providers: [],
};

export default multiversxPlugin;
