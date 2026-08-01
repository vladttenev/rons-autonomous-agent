import * as fs from "fs";
import * as path from "path";
import { ronsLogger } from "@rons-org/core";

export function loadTokenAddresses(): string[] {
    try {
        const filePath = path.resolve(
            process.cwd(),
            "../characters/tokens/tokenaddresses.json"
        );
        const data = fs.readFileSync(filePath, "utf8");
        const addresses = JSON.parse(data);
        ronsLogger.log("Loaded token addresses:", addresses);
        return addresses;
    } catch (error) {
        ronsLogger.error("Failed to load token addresses:", error);
        throw new Error("Token addresses file not found or invalid");
    }
}
