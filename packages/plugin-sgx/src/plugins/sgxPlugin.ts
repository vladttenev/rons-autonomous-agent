import type { Plugin } from "@rons-org/core";
import { sgxAttestationProvider } from "../providers/sgxAttestationProvider";

export const sgxPlugin: Plugin = {
    name: "sgx",
    description: "Intel SGX plugin for Rons, providing SGX attestation",
    actions: [],
    providers: [sgxAttestationProvider],
    evaluators: [],
    services: [],
    clients: [],
};
