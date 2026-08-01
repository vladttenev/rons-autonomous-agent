import type { Plugin } from "@rons-org/core";
import GoplusSecurityService from "./services/GoplusSecurityService";

export * from "./services/GoplusSecurityService";


export const goplusPlugin: Plugin = {
  name: "goplus",
  description:
    "goplus Plugin for Rons - Enables on-chain security checks",
  actions: [],
  evaluators: [],
  providers: [],
  services: [new GoplusSecurityService()],
};

export default goplusPlugin;
