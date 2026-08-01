import type { Plugin } from "@rons-org/core";
import { dcapOnChainVerifyAction } from "./actions/on-chain";

export const dcapPlugin: Plugin = {
    name: "dcap",
    description: "Basic DCAP attestation plugin",
    actions: [dcapOnChainVerifyAction],
};
