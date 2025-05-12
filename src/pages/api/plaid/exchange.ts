// /src/pages/api/plaid/exchange.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const config = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID!,
      "PLAID-SECRET": process.env.PLAID_SECRET!,
    },
  },
});

const plaid = new PlaidApi(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { public_token } = req.body;
    if (!public_token) {
      return res.status(400).json({ error: "Missing public_token" });
    }

    const { data } = await plaid.itemPublicTokenExchange({ public_token });
    return res.status(200).json({ access_token: data.access_token, item_id: data.item_id });
  } catch (err) {
    console.error("Plaid token exchange error:", err);
    return res.status(500).json({ error: "Token exchange failed" });
  }
}
