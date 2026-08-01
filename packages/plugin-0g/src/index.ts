import type { Plugin } from "@rons-org/core";
import { zgUpload } from "./actions/upload";

export const zgPlugin: Plugin = {
    description: "ZeroG Plugin for Rons",
    name: "ZeroG",
    actions: [zgUpload],
    evaluators: [],
    providers: [],
};
