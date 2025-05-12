import type { NextApiRequest, NextApiResponse } from "next";
import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  Products,
  CountryCode,
} from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID!,
      "PLAID-SECRET": process.env.PLAID_SECRET!,
    },
  },
});

const client = new PlaidApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tokenResponse = await client.linkTokenCreate({
      user: {
        client_user_id: "user-id",
      },
      client_name: "Frankie",
      products: [Products.Auth, Products.Transactions, Products.Income],
      country_codes: [CountryCode.Ca],
      language: "en",
      redirect_uri: process.env.PLAID_REDIRECT_URI || undefined,
    });

    res.status(200).json(tokenResponse.data);
  } catch (error) {
    console.error("Plaid Link Token Error:", error);
    res.status(500).json({ error: "Could not create link token" });
  }
}
