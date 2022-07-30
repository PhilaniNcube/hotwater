import { XeroClient } from "xero-node";

const xero = new XeroClient({
  clientId: process.env.XERO_CLIENT_ID,
  clientSecret: "YOUR_CLIENT_SECRET",
  redirectUris: [`http://localhost:3000/callback`],
  grantType: "client_credentials",
  scopes: "openid profile email accounting.transactions offline_access".split(
    " "
  ),
});


export default xero
