import { supabase } from "../../../utils/supabase";
import xero from "../../../utils/xero";

const code = "3a7f8dd35bc31160b384b399cf4e2e75790083771117a265768bc66c47f432a9";

export default async function handler(req, res) {

  await xero.initialize();

const tokenSet = await xero.getClientCredentialsToken();



 console.log(tokenSet)

 res.send(tokenSet)

}
