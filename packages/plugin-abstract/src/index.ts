import type { Plugin } from "@rons-org/core";

import { transferAction, getBalanceAction, deployTokenAction } from "./actions";

export const abstractPlugin: Plugin = {
	name: "abstract",
	description: "Abstract Plugin for Rons",
	actions: [transferAction, getBalanceAction, deployTokenAction],
	evaluators: [],
	providers: [],
};

export default abstractPlugin;
