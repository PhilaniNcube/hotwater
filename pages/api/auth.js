import { supabase } from '../../utils/supabase';
import cookie from 'cookie';

export default async function handler(req, res) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return res.status(401).send('unauthorized');
  }

  res.send(user);
}
