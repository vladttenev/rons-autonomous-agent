// src/index.ts
import { type Client, type IAgentRuntime, ronsLogger } from "@rons-org/core";
import { validateInstagramConfig } from "./environment";
import { initializeClient } from "./lib/auth";
import { InstagramInteractionService } from "./services/interaction";
import { InstagramPostService } from "./services/post";

export const InstagramClientInterface: Client = {
    async start(runtime: IAgentRuntime) {
        try {
            // Validate configuration
            const config = await validateInstagramConfig(runtime);
            ronsLogger.log("Instagram client configuration validated");

            // Initialize client and get initial state
            const state = await initializeClient(runtime, config);
            ronsLogger.log("Instagram client initialized");

            // Create services
            const postService = new InstagramPostService(runtime, state);
            const interactionService = new InstagramInteractionService(
                runtime,
                state
            );

            // Start services
            if (!config.INSTAGRAM_DRY_RUN) {
                await postService.start();
                ronsLogger.log("Instagram post service started");

                if (config.INSTAGRAM_ENABLE_ACTION_PROCESSING) {
                    await interactionService.start();
                    ronsLogger.log("Instagram interaction service started");
                }
            } else {
                ronsLogger.log("Instagram client running in dry-run mode");
            }

            // Return manager instance
            return {
                post: postService,
                interaction: interactionService,
                state,
            };
        } catch (error) {
            ronsLogger.error("Failed to start Instagram client:", error);
            throw error;
        }
    },
    // eslint-disable-next-line
    async stop(runtime: IAgentRuntime) {
        ronsLogger.log("Stopping Instagram client services...");
        // Cleanup will be handled by the services themselves
    },
};

export default InstagramClientInterface;
