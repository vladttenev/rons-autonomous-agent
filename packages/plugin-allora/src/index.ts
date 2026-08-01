import type { Plugin } from "@rons-org/core";
import { getInferenceAction } from "./actions/getInference.ts";
import { topicsProvider } from "./providers/topics.ts";

export const alloraPlugin: Plugin = {
    name: "Allora Network plugin",
    description: "Allora Network plugin for Rons",
    actions: [getInferenceAction],
    evaluators: [],
    providers: [topicsProvider],
};
