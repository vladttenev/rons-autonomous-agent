import type { Plugin } from "@rons-org/core";
import sendGif from "./actions/sendGif";

export const giphyPlugin: Plugin = {
    name: "giphy",
    description: "Giphy Plugin for Rons to send GIFs in responses",
    actions: [
        sendGif
    ],
    evaluators: [],
    providers: [],
};

export default giphyPlugin;
