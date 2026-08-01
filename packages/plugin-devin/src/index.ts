import type { Plugin } from "@rons-org/core";
import { startSessionAction } from "./actions/startSession";
import { devinProvider } from "./providers/devinProvider";
import { validateDevinConfig } from "./environment";

export const devinPlugin: Plugin = {
    name: "devinPlugin",
    description: "Integrates Devin API with Rons for task automation and session management",
    actions: [startSessionAction],
    providers: [devinProvider],
};
