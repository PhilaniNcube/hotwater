import cookie from 'cookie';
import { supabase } from '../../../utils/supabase';

export default async function handler(req, res) {
  const id = req.query.id;

  console.log(id);

  const { user } = await supabase.auth.api.getUserByCookie(req);

  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  const { data: quote } = await supabase
    .from('quotes')
    .select('*')
    .eq('id', id)
    .single();

  console.log(quote);

  if (!user) {
    return res.status(401).send('unauthorized');
  }

  res.send(quote);
}
