import type { Plugin } from "@rons-org/core";
import getLatestNFT from "./actions/getLatestNFT";
import getCollectionStats from "./actions/getCollectionStats";
import getTokenSales from "./actions/getTokenSales";

export const stargazePlugin: Plugin = {
    name: "stargaze",
    description: "Stargaze NFT Plugin for Rons",
    actions: [
        getLatestNFT,
        getCollectionStats,
        getTokenSales
    ],
    evaluators: [],
    providers: [],
};

export default stargazePlugin;