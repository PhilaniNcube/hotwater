import cookie from 'cookie';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { supabase } from '../../../utils/supabase';

var FormData = require('form-data');

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

  try {
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

    const day = new Date().toISOString();

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

    const hash = CryptoJS.MD5(JSON.stringify(check));

    const CHECKSUM = hash.toString();

    const initiate = await fetch(
      `https://secure.paygate.co.za/payweb3/initiate.trans`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'formData' },
        body: JSON.stringify({
          PAYGATE_ID: process.env.PAYGATE_ID,
          REFERENCE: data.id,
          AMOUNT: orderTotal * 100,
          CURRENCY: 'ZAR',
          RETURN_URL: `https://hotwater24.com/orders/${data.id}`,
          TRANSACTION_DATE: day,
          LOCALE: 'en-za',
          COUNTRY: 'ZAF',
          EMAIL: email,
          CHECKSUM: CHECKSUM,
        }),
      },
    );

    console.log(initiate);

    if (data) {
      res.status(200).json(initiate);
    } else {
      res.status(400).json(error);
    }
  } catch (error) {
    res.status(400).json(error);
  }
}
