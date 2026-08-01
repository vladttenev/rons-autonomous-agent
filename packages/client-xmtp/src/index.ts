import { Message, XMTP, xmtpClient } from "@xmtp/agent-starter";
import {
    composeContext,
    Content,
    ronsLogger,
    Memory,
    ModelClass,
    stringToUuid,
    messageCompletionFooter,
    generateMessageResponse,
    Client,
    IAgentRuntime,
} from "@rons-org/core";

let xmtp: XMTP = null;
let ronsRuntime: IAgentRuntime = null;

export const messageHandlerTemplate =
    // {{goals}}
    `# Action Examples
{{actionExamples}}
(Action examples are for reference only. Do not use the information from them in your response.)

# Knowledge
{{knowledge}}

# Task: Generate dialog and actions for the character {{agentName}}.
About {{agentName}}:
{{bio}}
{{lore}}

{{providers}}

{{attachments}}

# Capabilities
Note that {{agentName}} is capable of reading/seeing/hearing various forms of media, including images, videos, audio, plaintext and PDFs. Recent attachments have been included above under the "Attachments" section.

{{messageDirections}}

{{recentMessages}}

{{actions}}

# Instructions: Write the next message for {{agentName}}.
` + messageCompletionFooter;

export const XmtpClientInterface: Client = {
    start: async (runtime: IAgentRuntime) => {
        if (!xmtp) {
            ronsRuntime = runtime;

            xmtp = await xmtpClient({
                walletKey: process.env.EVM_PRIVATE_KEY as string,
                onMessage,
            });

            ronsLogger.success("✅ XMTP client started");
            ronsLogger.info(`XMTP address: ${xmtp.address}`);
            ronsLogger.info(`Talk to me on:`);
            ronsLogger.log(
                `Converse: https://converse.xyz/dm/${xmtp.address}`
            );
            ronsLogger.log(
                `Coinbase Wallet: https://go.cb-w.com/messaging?address=${xmtp.address}`
            );
            ronsLogger.log(
                `Web or Farcaster Frame: https://client.message-kit.org/?address=${xmtp.address}`
            );

            return xmtp;
        }
        return xmtp;
    },
    stop: async (_runtime: IAgentRuntime) => {
        ronsLogger.warn("XMTP client does not support stopping yet");
    },
};

const onMessage = async (message: Message) => {
    ronsLogger.info(
        `Decoded message: ${message.content?.text ?? "no text"} by ${
            message.sender.address
        }`
    );

    try {
        const text = message?.content?.text ?? "";
        const messageId = stringToUuid(message.id as string);
        const userId = stringToUuid(message.sender.address as string);
        const roomId = stringToUuid(message.group.id as string);
        await ronsRuntime.ensureConnection(
            userId,
            roomId,
            message.sender.address,
            message.sender.address,
            "xmtp"
        );

        const content: Content = {
            text,
            source: "xmtp",
            inReplyTo: undefined,
        };

        const userMessage = {
            content,
            userId,
            roomId,
            agentId: ronsRuntime.agentId,
        };

        const memory: Memory = {
            id: messageId,
            agentId: ronsRuntime.agentId,
            userId,
            roomId,
            content,
            createdAt: Date.now(),
        };

        await ronsRuntime.messageManager.createMemory(memory);

        const state = await ronsRuntime.composeState(userMessage, {
            agentName: ronsRuntime.character.name,
        });

        const context = composeContext({
            state,
            template: messageHandlerTemplate,
        });

        const response = await generateMessageResponse({
            runtime: ronsRuntime,
            context,
            modelClass: ModelClass.LARGE,
        });
        const _newMessage = [
            {
                text: response?.text,
                source: "xmtp",
                inReplyTo: messageId,
            },
        ];
        // save response to memory
        const responseMessage = {
            ...userMessage,
            userId: ronsRuntime.agentId,
            content: response,
        };

        await ronsRuntime.messageManager.createMemory(responseMessage);

        if (!response) {
            ronsLogger.error("No response from generateMessageResponse");
            return;
        }

        await ronsRuntime.evaluate(memory, state);

        const _result = await ronsRuntime.processActions(
            memory,
            [responseMessage],
            state,
            async (newMessages) => {
                if (newMessages.text) {
                    _newMessage.push({
                        text: newMessages.text,
                        source: "xmtp",
                        inReplyTo: undefined,
                    });
                }
                return [memory];
            }
        );
        for (const newMsg of _newMessage) {
            await xmtp.send({
                message: newMsg.text,
                originalMessage: message,
                metadata: {},
            });
        }
    } catch (error) {
        ronsLogger.error("Error in onMessage", error);
    }
};

export default XmtpClientInterface;
