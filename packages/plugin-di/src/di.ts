import type { Plugin } from "@rons-org/core";
import { Container, type interfaces } from "inversify";
import { FACTORIES } from "./symbols";
import { createPlugin } from "./factories";
import type { PluginOptions } from "./types";

const globalContainer = new Container();

// ----- Bind to factory functions -----

globalContainer
    .bind<interfaces.Factory<Promise<Plugin>>>(FACTORIES.PluginFactory)
    .toFactory<Promise<Plugin>, [PluginOptions]>(createPlugin);

export { globalContainer };
