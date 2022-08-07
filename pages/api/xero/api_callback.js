
import xero from "../../../utils/xero";
import { encode, decode } from "js-base64";
import { setCookie } from "cookies-next";
import { init } from "analytics";
import { supabaseService } from "../../../utils/supabaseService";


export default async function handler(req, res) {


  const {code, url} = req.body


  // const {code } = req.body;



  const tokenSet = await xero.apiCallback(url);


  const { data, error } = await supabaseService
    .from("xero")
    .update({
      access_token: tokenSet.access_token,
      id_token: tokenSet.id_token,
      refresh_token: tokenSet.refresh_token,
      scope: tokenSet.scope,
      session_state: tokenSet.session_state,
      token_type: tokenSet.token_type,
    })
    .eq('id', 1);

    console.log({data, error})


  res.send({
    message: "Token",
    response: {
     data
    },
  });



}


