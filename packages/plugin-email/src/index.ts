import type { Plugin } from "@rons-org/core";
import { EmailClientInterface } from "./clients/emailClient";

export const emailPlugin: Plugin = {
    name: "email",
    description: "Email plugin for Rons",
    clients: [EmailClientInterface],
    actions: [],
    evaluators: [],
    services: [],
};

export * from "./types";

export default emailPlugin;
