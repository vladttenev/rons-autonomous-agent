import {
    type Action,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
    ronsLogger,
} from "@rons-org/core";
import type { TransactionHash } from "genlayer-js/types";
import { ClientProvider } from "../providers/client";
import { getParamsWithLLM } from "../utils/llm";

const getTransactionTemplate = `
# Task: Extract the transaction hash from the user's message.

# Instructions: The user is requesting transaction details from the GenLayer protocol.

<latest user message>
{{userMessage}}
</latest user message>

<data from recent messages>
{{recentMessagesData}}
</data from recent messages>

# Your response must be formatted as a JSON block with this structure:
\`\`\`json
{
  "hash": "<Transaction Hash>"
}
\`\`\`
`;

export const getTransactionAction: Action = {
    name: "GET_TRANSACTION",
    similes: ["GET_TRANSACTION"],
    description: "Get transaction details from the GenLayer protocol",
    validate: async (runtime: IAgentRuntime) => {
        const privateKey = runtime.getSetting("GENLAYER_PRIVATE_KEY");
        return typeof privateKey === "string" && privateKey.startsWith("0x");
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: Record<string, unknown>,
        callback: HandlerCallback
    ) => {
        ronsLogger.info("Starting get transaction action");
        ronsLogger.debug("User message:", message.content.text);

        const clientProvider = new ClientProvider(runtime);

        const options = await getParamsWithLLM<{ hash: TransactionHash }>(
            runtime,
            message,
            getTransactionTemplate,
            state
        );

        if (
            !options ||
            !options.hash ||
            !/^0x[a-fA-F0-9]{64}$/.test(options.hash)
        ) {
            ronsLogger.error("No valid transaction hash found in message");
            throw new Error("No valid transaction hash found in message");
        }

        ronsLogger.info(
            `Getting transaction details for hash: ${options.hash}`
        );
        const result = await clientProvider.client.getTransaction({
            hash: options.hash,
        });

        ronsLogger.success("Successfully retrieved transaction details");
        ronsLogger.debug("Transaction details:", result);
        await callback(
            {
                text: `Transaction details: ${JSON.stringify(
                    result,
                    (_key, value) =>
                        typeof value === "bigint" ? Number(value) : value,
                    2
                )}`,
            },
            []
        );
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Get transaction details for hash 0x1234567890123456789012345678901234567890123456789012345678901234",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Here are the transaction details:",
                    action: "GET_TRANSACTION",
                },
            },
        ],
    ],
};
