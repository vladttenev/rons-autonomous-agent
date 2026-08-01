import type { Plugin } from "@rons-org/core";
export { onchainJson } from "./types/iq.ts";

export const ronsCodeinPlugin: Plugin = {
    name: "rons-codein",
    description: "Plugin that interacts with the on-chain inscription method 'Code-In'",
    actions: [
    ],
    providers: [
        /* custom providers */
    ],
    evaluators: [
         /* custom evaluators */
    ],
    services: [],
    clients: [],

};
