import type { Plugin } from "@rons-org/core";
import transfer from "./actions/transfer";

export const quaiPlugin: Plugin = {
    name: "quai",
    description: "Quai Plugin for Rons",
    actions: [transfer],
    evaluators: [],
    providers: [],
};

export default quaiPlugin;
