import type { Plugin } from "@rons-org/core";

import { TransferAction } from "./actions/";

export const zksyncEraPlugin: Plugin = {
    name: "zksync-era",
    description: "ZKsync Era Plugin for Rons",
    actions: [TransferAction],
    evaluators: [],
    providers: [],
};

export default zksyncEraPlugin;
