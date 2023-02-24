import cookie from "cookie";
import CryptoJS from "crypto-js";
import axios from "axios";
import { supabase } from "../../../utils/supabase";
var FormData = require("form-data");
var fs = require("fs");

export default async function handler(req, res) {
  const {
    first_name,
    last_name,
    email,
   amount,
   reference,
   id
  } = req.body;





  const tempDay = new Date();

  const day = tempDay.toUTCString();

  const check = {
    PAYGATE_ID: "1046125100012",
    REFERENCE: `${reference}`,
    AMOUNT: Number(amount * 100),
    CURRENCY: "ZAR",
    RETURN_URL: `https://hotwater24.com/orders/payment`,
    TRANSACTION_DATE: day,
    LOCALE: "en-za",
    COUNTRY: "ZAF",
    EMAIL: email,
    PAYGATE_SECRET: process.env.PAYGATE_SECRET,
  };

  const checkString = `${check.PAYGATE_ID}${check.REFERENCE}${check.AMOUNT}${check.CURRENCY}${check.RETURN_URL}${check.TRANSACTION_DATE}${check.LOCALE}${check.COUNTRY}${check.EMAIL}${check.PAYGATE_SECRET}`;

  const checksum = CryptoJS.MD5(checkString);
  console.log(checksum.toString());

  const formdata = new FormData();
  formdata.append("PAYGATE_ID", "1046125100012");
  formdata.append("REFERENCE", `${reference}`);
  formdata.append("AMOUNT", Number(amount * 100));
  formdata.append("CURRENCY", "ZAR");
  formdata.append("RETURN_URL", `https://hotwater24.com/orders/payment`);
  formdata.append("TRANSACTION_DATE", day);
  formdata.append("LOCALE", "en-za");
  formdata.append("COUNTRY", "ZAF");
  formdata.append("EMAIL", email);
  formdata.append("CHECKSUM", checksum.toString());

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const payRes = await fetch(
    "https://secure.paygate.co.za/payweb3/initiate.trans",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const arr = result.split("&");
      console.log(arr);

      return arr;
    })
    .catch((error) => console.log("error", error));

  const ID_STRING = payRes[0];
  const REQUEST_ID = payRes[1];
  const REF = payRes[2];
  const CHECKER = payRes[3];

  const idArray = ID_STRING.split("=");
  const PAYGATE_ID = idArray[1];

  const reqArray = REQUEST_ID.split("=");
  const PAYGATE_REQUEST_ID = reqArray[1];

  const refArr = REF.split("=");
  const REFERENCE = refArr[1];

  const checkArray = CHECKER.split("=");
  const SUM = checkArray[1];

  res.status(200).send({
    pagateId: PAYGATE_ID,
    reqId: PAYGATE_REQUEST_ID,
    ref: REFERENCE,
    checksum: SUM,
  });
}
