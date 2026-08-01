import type { Plugin, Provider } from "@rons-org/core";
import generateMusic from "./actions/generate";
import extendMusic from "./actions/extend";
import { UdioProvider } from "./providers/udio";

export {
    UdioProvider,
    generateMusic as GenerateMusic,
    extendMusic as ExtendMusic
};

const udioProvider: Provider = {
    get: async (runtime, message, state) => {
        const provider = await UdioProvider.get(runtime, message, state);
        return provider;
    }
};

export const udioPlugin: Plugin = {
    name: "udio",
    description: "Udio AI Music Generation Plugin for Rons",
    actions: [generateMusic, extendMusic],
    evaluators: [],
    providers: [udioProvider],
};

export default udioPlugin;