import type { Plugin } from "@rons-org/core";
import getPrice from "./actions/getPrice";

export const coinmarketcapPlugin: Plugin = {
    name: "coinmarketcap",
    description: "CoinMarketCap Plugin for Rons",
    actions: [getPrice],
    evaluators: [],
    providers: [],
};

export default coinmarketcapPlugin;
