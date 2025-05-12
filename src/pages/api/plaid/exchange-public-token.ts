// pages/api/plaid/exchange-public-token.ts
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
    const { public_token } = req.body;

    const tokenResponse = await plaidClient.itemPublicTokenExchange({
      public_token,
    });

    const accessToken = tokenResponse.data.access_token;
    const itemId = tokenResponse.data.item_id;

    // TODO: Save accessToken securely to your DB or Supabase

    res.status(200).json({ access_token: accessToken, item_id: itemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Token exchange failed" });
  }
}
