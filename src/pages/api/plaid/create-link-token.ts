// pages/api/plaid/create-link-token.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const config = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID!,
      "PLAID-SECRET": process.env.PLAID_SECRET!,
    },
  },
});

const plaidClient = new PlaidApi(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tokenResponse = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: "unique-user-id", // use the actual user ID
      },
      client_name: "Frankie",
      products: ["auth", "transactions", "income"],
      country_codes: ["CA"],
      language: "en",
      redirect_uri: process.env.PLAID_REDIRECT_URI || undefined,
    });

    res.status(200).json({ link_token: tokenResponse.data.link_token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create link token" });
  }
}
