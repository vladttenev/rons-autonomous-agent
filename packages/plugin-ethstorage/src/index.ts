import type { Plugin } from "@rons-org/core";

export * from "./actions/submitData";
export * from "./actions/transfer";

import transfer from "./actions/transfer";
import submitData from "./actions/submitData";

export const ethstoragePlugin: Plugin = {
    name: "ethstorage",
    description: "Ethstorage DA publishing plugin",
    providers: [],
    evaluators: [],
    services: [],
    actions: [transfer, submitData],
};

export default ethstoragePlugin;
