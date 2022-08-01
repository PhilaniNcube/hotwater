
import xero from "../../../utils/xero";
import { encode, decode } from "js-base64";
import { setCookie } from "cookies-next";
import { init } from "analytics";


export default async function handler(req, res) {


  const {code, url} = req.body


  // const {code } = req.body;



  const tokenSet = await xero.apiCallback(url);



  // res.send({message: "Token set successfully", token: getToken});

  // const request = await fetch(`https://api.xero.com/connections`, {
  //   headers: {
  //     'Authorization': 'Bearer ' + getToken.access_token,
  //     'Content-Type': 'application/json',
  //   }
  // });


  // const response = await request.json();

  // console.log(response);

  res.send({ message: "Token", response: tokenSet});



}


