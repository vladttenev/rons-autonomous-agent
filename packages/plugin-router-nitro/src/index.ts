import { Plugin } from "@rons-org/core";
import { executeSwapAction } from "./actions/executeSwap.ts";


export const nitroPlugin: Plugin = {
    name: "Nitro",
    description: "Nitro Plugin for Rons",
    actions: [executeSwapAction],
    evaluators: [],
    providers: [],
};

export default nitroPlugin;
