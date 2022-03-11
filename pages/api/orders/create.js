import { supabase } from '../../utils/supabase';
import cookie from 'cookie';

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

  const { data, error } = await supabase.from('orders').insert([
    {
      user_id: user.id,
      orderItems: cart,
      shippingCosts: shipping,
      orderTotal: orderTotal,
      subtotal: cartTotal,
      postalCode: postalCode,
      city: city,
      firstName: firstName,
      lastName: lastName,
      streetAddress: streetAddress,
      email: email,
    },
  ]);

  const result = await data;

  res.json(result);
}
