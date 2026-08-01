import {ronsLogger, type IAgentRuntime, type Memory, type Provider, type State} from "@rons-org/core";
import {TwitterScraper} from "../util/twitterScraper.ts";

const tweetProvider: Provider = {
    // eslint-disable-next-line
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        const scraperWithPrimus = new TwitterScraper();
        try {
            ronsLogger.info("Attempting Twitter login");
            await scraperWithPrimus.login();
            ronsLogger.info("Twitter login successful");
        }catch (error){
            ronsLogger.error("Twitter login failed:", error);
            return false;
        }

        if (!(await scraperWithPrimus.getScraper().isLoggedIn())) {
            ronsLogger.error("Failed to login to Twitter");
            return false;
        }
        const userName = process.env.TWITTER_USERNAME_WANT_TO_GET_TWEET;
        if(!userName){
            ronsLogger.error("TWITTER_USERNAME_WANT_TO_GET_TWEET is not set");
            return false;
        }
        ronsLogger.debug(`Fetching tweets for user: ${userName}`);
        const userId = await scraperWithPrimus.getUserIdByScreenName(userName);
        ronsLogger.debug(`Fetching tweets for user: ${userName}`);
        try {
            const result = await scraperWithPrimus.getUserLatestTweet(userId);
            ronsLogger.debug("Tweet retrieved successfully");
            return result;
        } catch (error) {
            ronsLogger.error("Failed to fetch tweet:", error);
            return false;
        }
    },
};

export { tweetProvider };
