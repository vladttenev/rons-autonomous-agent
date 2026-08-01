import { ronsLogger } from "@rons-org/core";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { WalletProvider } from "./wallet";
import { Coin } from "@cosmjs/stargate";

export class BankProvider {
    private wallet: WalletProvider;

    constructor(wallet: WalletProvider) {
        this.wallet = wallet;
    }

    async sendTokens(
        recipient: string,
        amount: Coin
    ): Promise<DeliverTxResponse> {
        try {
            const address = await this.wallet.getAddress();
            const client = await this.wallet.getClient();
            if (!address) {
                throw new Error("Could not get address");
            }
            const tx = await client.sendTokens(
                address,
                recipient,
                [amount],
                "auto",
                "Sent tokens using Rons"
            );
            return tx;
        } catch (e) {
            ronsLogger.error(`Error in sendTokens: ${e}`);
            throw e;
        }
    }
}
