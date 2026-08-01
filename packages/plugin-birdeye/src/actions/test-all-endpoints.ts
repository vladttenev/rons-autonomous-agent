import {
    type Action,
    type ActionExample,
    ronsLogger,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@rons-org/core";
import { BirdeyeProvider } from "../birdeye";
import { waitFor } from "../utils";

// This is a dummy action generated solely to test all Birdeye endpoints and should not be used in production
export const testAllEndpointsAction = {
    name: "BIRDEYE_TEST_ALL_ENDPOINTS",
    similes: [],
    description: "Test all Birdeye endpoints with sample data",
    handler: async (
        runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: Record<string, unknown>,
        callback?: HandlerCallback
    ) => {
        try {
            ronsLogger.info("Testing all endpoints");

            await waitFor(1000);

            const birdeyeProvider = new BirdeyeProvider(runtime.cacheManager);

            // Sample data for testing
            const sampleParams = {
                token: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                address: "MfDuWeqSHEqTFVYZ7LoexgAK9dxk7cy4DFJWjWMGVWa",
                network: "solana",
                list_address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                address_type: "token",
                type: "1D",
                tx_type: "all",
                sort_type: "desc",
                unixtime: 1234567890,
                base_address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                quote_address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                time_to: 1672531199, // Unix timestamp
                meme_platform_enabled: true,
                time_frame: "1D",
                sort_by: undefined,
                list_addresses: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                wallet: "MfDuWeqSHEqTFVYZ7LoexgAK9dxk7cy4DFJWjWMGVWa",
                token_address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                pair: "samplePair",
                before_time: 1672531199,
                after_time: 1672331199,
            };

            // Test each fetch function
            ronsLogger.info("fetchDefiSupportedNetworks");
            await birdeyeProvider.fetchDefiSupportedNetworks();
            ronsLogger.success("fetchDefiSupportedNetworks: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiPrice");
            await birdeyeProvider.fetchDefiPrice({ ...sampleParams });
            ronsLogger.success("fetchDefiPrice: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiPriceMultiple");
            await birdeyeProvider.fetchDefiPriceMultiple({ ...sampleParams });
            ronsLogger.success("fetchDefiPriceMultiple: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiPriceMultiple_POST");
            await birdeyeProvider.fetchDefiPriceMultiple_POST({
                ...sampleParams,
            });
            ronsLogger.success("fetchDefiPriceMultiple_POST: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiPriceHistorical");
            await birdeyeProvider.fetchDefiPriceHistorical({
                ...sampleParams,
                address_type: "token",
                type: "1D",
            });
            ronsLogger.success("fetchDefiPriceHistorical: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiPriceHistoricalByUnixTime");
            await birdeyeProvider.fetchDefiPriceHistoricalByUnixTime({
                address: sampleParams.token,
            });
            ronsLogger.success("fetchDefiPriceHistoricalByUnixTime: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiTradesToken");
            await birdeyeProvider.fetchDefiTradesToken({
                address: sampleParams.token,
            });
            ronsLogger.success("fetchDefiTradesToken: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiTradesPair");
            await birdeyeProvider.fetchDefiTradesPair({
                address: sampleParams.token,
            });
            ronsLogger.success("fetchDefiTradesPair: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiTradesTokenSeekByTime");
            await birdeyeProvider.fetchDefiTradesTokenSeekByTime({
                address: sampleParams.token,
                before_time: sampleParams.before_time,
            });
            ronsLogger.success("fetchDefiTradesTokenSeekByTime: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiTradesPairSeekByTime");
            await birdeyeProvider.fetchDefiTradesPairSeekByTime({
                address: sampleParams.token,
                after_time: sampleParams.after_time,
            });
            ronsLogger.success("fetchDefiTradesPairSeekByTime: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiOHLCV");
            await birdeyeProvider.fetchDefiOHLCV({
                ...sampleParams,
                type: "1D",
            });
            ronsLogger.success("fetchDefiOHLCV: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiOHLCVPair");
            await birdeyeProvider.fetchDefiOHLCVPair({
                ...sampleParams,
                type: "1D",
            });
            ronsLogger.success("fetchDefiOHLCVPair: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiOHLCVBaseQuote");
            await birdeyeProvider.fetchDefiOHLCVBaseQuote({
                ...sampleParams,
                type: "1D",
            });
            ronsLogger.success("fetchDefiOHLCVBaseQuote: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchDefiPriceVolume");
            await birdeyeProvider.fetchDefiPriceVolume({
                address: sampleParams.token,
            });
            ronsLogger.success("fetchDefiPriceVolume: SUCCESS!");
            await waitFor(500);

            // this endpoint is for enterprise users only
            // ronsLogger.info("fetchDefiPriceVolumeMulti_POST");
            // await birdeyeProvider.fetchDefiPriceVolumeMulti_POST({
            //     list_address: sampleParams.token,
            // });
            // ronsLogger.success("fetchDefiPriceVolumeMulti_POST: SUCCESS!");
            // await waitFor(500);

            ronsLogger.info("fetchTokenList");
            await birdeyeProvider.fetchTokenList({
                ...sampleParams,
                sort_by: "mc",
                sort_type: "desc",
            });
            ronsLogger.success("fetchTokenList: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenSecurityByAddress");
            await birdeyeProvider.fetchTokenSecurityByAddress({
                ...sampleParams,
            });
            ronsLogger.success("fetchTokenSecurityByAddress: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenOverview");
            await birdeyeProvider.fetchTokenOverview({ ...sampleParams });
            ronsLogger.success("fetchTokenOverview: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenCreationInfo");
            await birdeyeProvider.fetchTokenCreationInfo({ ...sampleParams });
            ronsLogger.success("fetchTokenCreationInfo: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenTrending");
            await birdeyeProvider.fetchTokenTrending({
                ...sampleParams,
                sort_by: "volume24hUSD",
                sort_type: "desc",
            });
            ronsLogger.success("fetchTokenTrending: SUCCESS!");
            await waitFor(500);

            // this endpoint is for enterprise users only
            // ronsLogger.info("fetchTokenListV2_POST");
            // await birdeyeProvider.fetchTokenListV2_POST({});
            // ronsLogger.success("fetchTokenListV2_POST: SUCCESS!");
            // await waitFor(500);

            ronsLogger.info("fetchTokenNewListing");
            await birdeyeProvider.fetchTokenNewListing({
                time_to: new Date().getTime(),
                meme_platform_enabled: true,
            });
            ronsLogger.success("fetchTokenNewListing: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenTopTraders");
            await birdeyeProvider.fetchTokenTopTraders({
                ...sampleParams,
                time_frame: "24h",
                sort_type: "asc",
                sort_by: "volume",
            });
            ronsLogger.success("fetchTokenTopTraders: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenAllMarketsList");
            await birdeyeProvider.fetchTokenAllMarketsList({
                ...sampleParams,
                time_frame: "12H",
                sort_type: "asc",
                sort_by: "volume24h",
            });
            ronsLogger.success("fetchTokenAllMarketsList: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenMetadataSingle");
            await birdeyeProvider.fetchTokenMetadataSingle({ ...sampleParams });
            ronsLogger.success("fetchTokenMetadataSingle: SUCCESS!");
            await waitFor(500);

            // this endpoint is for enterprise users only
            // ronsLogger.info("fetchTokenMetadataMulti");
            // await birdeyeProvider.fetchTokenMetadataMulti({ ...sampleParams });
            // ronsLogger.success("fetchTokenMetadataMulti: SUCCESS!");
            // await waitFor(500);

            ronsLogger.info("fetchTokenMarketData");
            await birdeyeProvider.fetchTokenMarketData({ ...sampleParams });
            ronsLogger.success("fetchTokenMarketData: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenTradeDataSingle");
            await birdeyeProvider.fetchTokenTradeDataSingle({
                ...sampleParams,
            });
            ronsLogger.success("fetchTokenTradeDataSingle: SUCCESS!");
            await waitFor(500);

            // this endpoint is for enterprise users only
            // ronsLogger.info("fetchTokenTradeDataMultiple");
            // await birdeyeProvider.fetchTokenTradeDataMultiple({
            //     ...sampleParams,
            // });
            // ronsLogger.success("fetchTokenTradeDataMultiple: SUCCESS!");
            // await waitFor(500);

            ronsLogger.info("fetchTokenHolders");
            await birdeyeProvider.fetchTokenHolders({ ...sampleParams });
            ronsLogger.success("fetchTokenHolders: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTokenMintBurn");
            await birdeyeProvider.fetchTokenMintBurn({
                ...sampleParams,
                sort_by: "block_time",
                sort_type: "desc",
                type: "all",
            });
            ronsLogger.success("fetchTokenMintBurn: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchWalletSupportedNetworks");
            await birdeyeProvider.fetchWalletSupportedNetworks();
            ronsLogger.success("fetchWalletSupportedNetworks: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchWalletPortfolio");
            await birdeyeProvider.fetchWalletPortfolio({ ...sampleParams });
            ronsLogger.success("fetchWalletPortfolio: SUCCESS!");
            await waitFor(500);

            // ronsLogger.info("fetchWalletPortfolioMultichain");
            // await birdeyeProvider.fetchWalletPortfolioMultichain({
            //     ...sampleParams,
            // });
            // ronsLogger.success("fetchWalletPortfolioMultichain: SUCCESS!");
            // await waitFor(500);

            ronsLogger.info("fetchWalletTokenBalance");
            await birdeyeProvider.fetchWalletTokenBalance({ ...sampleParams });
            ronsLogger.success("fetchWalletTokenBalance: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchWalletTransactionHistory");
            await birdeyeProvider.fetchWalletTransactionHistory({
                ...sampleParams,
            });
            ronsLogger.success("fetchWalletTransactionHistory: SUCCESS!");
            await waitFor(500);

            // ronsLogger.info("fetchWalletTransactionHistoryMultichain");
            // await birdeyeProvider.fetchWalletTransactionHistoryMultichain({
            //     ...sampleParams,
            // });
            // ronsLogger.success(
            //     "fetchWalletTransactionHistoryMultichain: SUCCESS!"
            // );
            // await waitFor(500);

            ronsLogger.info("fetchWalletTransactionSimulate_POST");
            await birdeyeProvider.fetchWalletTransactionSimulate_POST({
                from: sampleParams.token,
                to: sampleParams.token,
                data: JSON.stringify({ test: "ok" }),
                value: "100000",
            });
            ronsLogger.success(
                "fetchWalletTransactionSimulate_POST: SUCCESS!"
            );
            await waitFor(500);

            ronsLogger.info("fetchTraderGainersLosers");
            await birdeyeProvider.fetchTraderGainersLosers({
                ...sampleParams,
                type: "today",
                sort_type: "asc",
            });
            ronsLogger.success("fetchTraderGainersLosers: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchTraderTransactionsSeek");
            await birdeyeProvider.fetchTraderTransactionsSeek({
                ...sampleParams,
                tx_type: "all",
                before_time: undefined,
            });
            ronsLogger.success("fetchTraderTransactionsSeek: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("fetchPairOverviewSingle");
            await birdeyeProvider.fetchPairOverviewSingle({ ...sampleParams });
            ronsLogger.success("fetchPairOverviewSingle: SUCCESS!");
            await waitFor(500);

            // this endpoint is for enterprise users only
            // ronsLogger.info("fetchMultiPairOverview");
            // await birdeyeProvider.fetchMultiPairOverview({ ...sampleParams });
            // ronsLogger.success("fetchMultiPairOverview: SUCCESS!");
            // await waitFor(500);

            // this endpoint is for enterprise users only
            // ronsLogger.info("fetchPairOverviewMultiple");
            // await birdeyeProvider.fetchPairOverviewMultiple({
            //     ...sampleParams,
            // });
            // ronsLogger.success("fetchPairOverviewMultiple: SUCCESS!");
            // await waitFor(500);

            ronsLogger.info("fetchSearchTokenMarketData");
            await birdeyeProvider.fetchSearchTokenMarketData({
                ...sampleParams,
                sort_type: "asc",
            });
            ronsLogger.success("fetchSearchTokenMarketData: SUCCESS!");
            await waitFor(500);

            ronsLogger.info("All endpoints tested successfully");
            callback?.({ text: "All endpoints tested successfully!" });
            return true;
        } catch (error) {
            console.error("Error in testAllEndpointsAction:", error.message);
            callback?.({ text: `Error: ${error.message}` });
            return false;
        }
    },
    validate: async (_runtime: IAgentRuntime, message: Memory) => {
        // only run if explicitly triggered by user
        return message.content.text.includes("BIRDEYE_TEST_ALL_ENDPOINTS");
    },
    examples: [
        [
            {
                user: "user",
                content: {
                    text: "I want you to BIRDEYE_TEST_ALL_ENDPOINTS",
                    action: "BIRDEYE_TEST_ALL_ENDPOINTS",
                },
            },
        ],
    ] as ActionExample[][],
} as Action;
