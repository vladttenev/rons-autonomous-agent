import type { Plugin } from "@rons-org/core";
import launchAgent from "./actions/launchAgent";

export const autonomePlugin: Plugin = {
    name: "autonome",
    description: "Autonome Plugin for Rons",
    actions: [launchAgent],
    evaluators: [],
    providers: [],
};

export default autonomePlugin;
