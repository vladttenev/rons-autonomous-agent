import type { Plugin } from "@rons-org/core";
import transfer from "./actions/transfer";

export const massaPlugin: Plugin = {
    name: "massa",
    description: "Massa Plugin for Rons",
    actions: [transfer],
    evaluators: [],
    providers: [],
};

export default massaPlugin;
