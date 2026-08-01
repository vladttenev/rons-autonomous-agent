import type { Plugin } from "@rons-org/core";
import { TeeLogService } from "../services/teeLogService";

export const teeLogPlugin: Plugin = {
    name: "TEE-log",
    description: "Support verifiable logging for rons running in TEE",
    actions: [],
    providers: [],
    evaluators: [],
    services: [new TeeLogService()],
    clients: [],
};
