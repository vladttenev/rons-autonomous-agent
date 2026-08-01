import type { Plugin } from "@rons-org/core";

import { TransferAction } from "./actions";

export const cronosZkEVMPlugin: Plugin = {
    name: "cronoszkevm",
    description: "Cronos zkEVM plugin for Rons",
    actions: [TransferAction],
    evaluators: [],
    providers: [],
};

export default cronosZkEVMPlugin;
