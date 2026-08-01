import { ronsLogger } from "@rons-org/core";

export const debugLog = {
    request: (method: string, url: string, data?: any) => {
        ronsLogger.log("🌐 API Request:", {
            method,
            url,
            data: data || "No data"
        });
    },

    response: (response: any) => {
        ronsLogger.log("✅ API Response:", {
            status: response?.status,
            data: response?.data || "No data"
        });
    },

    error: (error: any) => {
        ronsLogger.error("⛔ Error Details:", {
            message: error?.message,
            response: {
                status: error?.response?.status,
                data: error?.response?.data
            },
            config: {
                url: error?.config?.url,
                method: error?.config?.method,
                data: error?.config?.data
            }
        });
    },

    validation: (config: any) => {
        ronsLogger.log("🔍 Config Validation:", config);
    }
};
