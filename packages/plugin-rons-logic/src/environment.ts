import { type IAgentRuntime } from "@rons-org/core";
import { z, ZodError } from "zod";

/**
 * This schema defines required environment settings for the Rons plugin
 */
export const ronsEnvSchema = z.object({
    RONS_COOKIE_API_KEY: z
        .string()
        .min(1, "Cookie API key is required"),
});

export type RonsConfig = z.infer<typeof ronsEnvSchema>;

/**
 * Validates or constructs a RonsConfig object using zod,
 * taking values from the IAgentRuntime or process.env as needed.
 */
export async function validateRonsConfig(
    runtime: IAgentRuntime
): Promise<RonsConfig> {
    try {
        const ronsConfig = {
            RONS_COOKIE_API_KEY:
                runtime.getSetting("RONS_COOKIE_API_KEY") ||
                process.env.RONS_COOKIE_API_KEY ||
                "",
        };

        return ronsEnvSchema.parse(ronsConfig);
    } catch (error) {
        if (error instanceof ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `Rons configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}
