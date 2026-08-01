import type { Plugin } from "@rons-org/core";
import { getCurrentWeatherAction } from "./actions/getCurrentWeather";

export * as actions from "./actions";

export const openWeatherPlugin: Plugin = {
    name: "openweather",
    description: "OpenWeather plugin for Rons",
    actions: [getCurrentWeatherAction],
    evaluators: [],
    providers: [],
};
export default openWeatherPlugin;
