import { supabase } from '../../utils/supabase';
import cookie from 'cookie';

export default async function handler(req, res) {
  await supabase.auth.api.setAuthCookie(req, res);

  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  const { user } = await supabase.auth.api.getUserByCookie(req);
}
