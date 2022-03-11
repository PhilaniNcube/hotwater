import cookie from 'cookie';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { supabase } from '../../../utils/supabase';
var FormData = require('form-data');
var fs = require('fs');

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    streetAddress,
    email,
    city,
    postalCode,
    cart,
    cartTotal,
    shipping,
    orderTotal,
  } = req.body;

  const { user } = await supabase.auth.api.getUserByCookie(req);
  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        user_id: user.id,
        orderItems: cart,
        shippingCost: shipping,
        orderTotal: orderTotal,
        subtotal: cartTotal,
        postalCode: postalCode,
        city: city,
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        email: email,
      },
    ])
    .single();

  const tempDay = new Date();

  const day = tempDay.toUTCString();

  const check = {
    PAYGATE_ID: process.env.PAYGATE_ID,
    REFERENCE: data.id,
    AMOUNT: orderTotal * 100,
    CURRENCY: 'ZAR',
    RETURN_URL: `https://hotwater24.com/orders/${data.id}`,
    TRANSACTION_DATE: day,
    LOCALE: 'en-za',
    COUNTRY: 'ZAF',
    EMAIL: email,
    PAYGATE_SECRET: 'secret',
  };

  const checkString = `${check.PAYGATE_ID}${check.REFERENCE}${check.AMOUNT}${check.CURRENCY}${check.RETURN_URL}${check.TRANSACTION_DATE}${check.LOCALE}${check.COUNTRY}${check.EMAIL}${check.PAYGATE_SECRET}`;

  const checksum = CryptoJS.MD5(checkString);
  console.log(checksum.toString());

  const formdata = new FormData();
  formdata.append('PAYGATE_ID', '10011072130');
  formdata.append('REFERENCE', `${data.id}`);
  formdata.append('AMOUNT', `${orderTotal * 100}`);
  formdata.append('CURRENCY', 'ZAR');
  formdata.append('RETURN_URL', `https://hotwater24.com/orders/${data.id}`);
  formdata.append('TRANSACTION_DATE', day);
  formdata.append('LOCALE', 'en-za');
  formdata.append('COUNTRY', 'ZAF');
  formdata.append('EMAIL', email);
  formdata.append('CHECKSUM', checksum.toString());

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  const payRes = await fetch(
    'https://secure.paygate.co.za/payweb3/initiate.trans',
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => {
      const arr = result.split('&');
      console.log(arr);

      return arr;
    })
    .catch((error) => res.status(400).json({ error: error }));
}
