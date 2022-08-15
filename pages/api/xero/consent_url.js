import { supabase } from "../../../utils/supabase";
import xero from "../../../utils/xero";

export default async function handler(req, res) {

const consentUrl = await xero.buildConsentUrl();

console.log({consentUrl});

res.redirect(consentUrl);

}




