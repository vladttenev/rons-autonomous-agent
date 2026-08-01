import {type IAgentRuntime, ronsLogger} from "@rons-org/core";

export function isUserAuthorized(
    userId: string,
    runtime: IAgentRuntime
): boolean {
    const authorizedUserId = runtime.getSetting("ACCESS_TOKEN_MANAGEMENT_TO");
    ronsLogger.log("UserID from message:", userId);
    ronsLogger.log("Authorized UserID:", authorizedUserId);
    if (authorizedUserId === "everyone") {
        return true;
    }
    return userId === authorizedUserId;
}
