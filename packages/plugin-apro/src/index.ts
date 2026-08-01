import type { Plugin } from "@rons-org/core";
import { createAndRegisterAgent } from "./actions/createAndRegisterAgent";
import { verifyData } from "./actions/verifyData";
import { attpsPriceQuery } from "./actions/attpsPriceQuery";

export const aproPlugin: Plugin = {
    name: "apro",
    description: "Apro Plugin for Rons",
    actions: [
        createAndRegisterAgent,
        verifyData,
        attpsPriceQuery,
    ],
    evaluators: [],
    providers: [],
};

export default aproPlugin;