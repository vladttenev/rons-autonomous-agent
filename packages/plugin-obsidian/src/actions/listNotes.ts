import {
    type Action,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
    ronsLogger,
} from "@rons-org/core";
import { getObsidian }  from "../helper";

export const listNotesAction: Action = {
    name: "LIST_NOTES",
    similes: [
        "LIST_NOTES",
        "SHOW_NOTES",
        "GET_NOTES",
        "FETCH_NOTES",
        "VIEW_NOTES",
        "DISPLAY_NOTES",
        "ENUMERATE_NOTES",
    ],
    description:
        "List all markdown notes in the Obsidian vault. Use format: 'List notes' or 'Show all notes'",
    validate: async (runtime: IAgentRuntime) => {
        try {
            ronsLogger.debug("Validating Obsidian connection");
            const obsidian = await getObsidian(runtime);
            await obsidian.connect();
            ronsLogger.debug("Obsidian connection validated successfully");
            return true;
        } catch (error) {
            ronsLogger.error("Failed to validate Obsidian connection:", error);
            return false;
        }
    },
    handler: async (
        runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: any,
        callback?: HandlerCallback
    ) => {
        ronsLogger.info("Starting list notes handler");
        const obsidian = await getObsidian(runtime);

        try {
            ronsLogger.info("Fetching list of notes from vault");
            const notes: string[] = await obsidian.listNotes();

            ronsLogger.info(`Successfully retrieved ${notes.length} notes`);

            // Format the notes list into a readable string
            const formattedNotes = notes.length > 0
                ? notes.map(note => `- ${note}`).join('\n')
                : "No notes found in the vault";

            if (callback) {
                callback({
                    text: `Found ${notes.length} notes in the vault:\n\n${formattedNotes}`,
                    metadata: {
                        count: notes.length,
                        notes: notes,
                    },
                });
            }
            return true;
        } catch (error) {
            ronsLogger.error("Error listing notes:", error);
            if (callback) {
                callback({
                    text: `Error listing notes: ${error.message}`,
                    error: true,
                });
            }
            return false;
        }
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "List notes",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "{{responseData}}",
                    action: "LIST_NOTES",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Show all notes in vault",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "{{responseData}}",
                    action: "LIST_NOTES",
                },
            },
        ],
    ],
};
