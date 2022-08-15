import { XeroClient } from "xero-node";

const xero = new XeroClient({
  clientId: process.env.XERO_CLIENT_ID,
  clientSecret: process.env.XERO_CLIENT_SECRET,
  redirectUris: [
    `http://localhost:3000/callback`,
    `https://hotwater24.com/callback`,
    `http://localhost:3000/api/xero/api_callback`,
    `http://localhost:3000/api/xero/create_contact`,
  ],
  grantType: "client_credentials",
  scopes:
    "openid profile email accounting.transactions accounting.contacts accounting.settings offline_access".split(
      " "
    ),
});

xero.initialize()

export default xero
