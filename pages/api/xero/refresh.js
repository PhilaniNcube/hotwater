import xero from "../../../utils/xero";
import { encode, decode } from "js-base64";
import { Contact, Contacts, Phone } from "xero-node";
import base64 from 'base-64'
import { supabaseService } from "../../../utils/supabaseService";

export default async function handler(req, res) {
  const BASIC = process.env.XERO_CLIENT_ID + ":" + process.env.XERO_CLIENT_SECRET

  console.log(base64.encode(BASIC))

  let { data, error } = await supabaseService
    .from("xero")
    .select("*")
    .eq("id", 1)
    .single();

  const auth = await fetch(
    `https://identity.xero.com/connect/token`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${base64.encode(BASIC)}`,
      },
      body: JSON.stringify({
        "grant_type": "client_credentials",
      }),
    }
  );


  const authResponse = await auth.json()

  res.send({authResponse})

}
