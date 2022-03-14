import cookie from 'cookie';
import { supabase } from '../../../utils/supabase';
import { supabaseService } from '../../../utils/supabaseService';

export default async function handler(req, res) {
  console.log(req.query);

  if (req.query.term === '') {
    let { data: quotes, error } = await supabaseService
      .from('quotes')
      .select('*, product_id(*)')
      .order('created_at', { ascending: false });

    res.status(200).send(quotes);
  } else {
    let { data: quotes, error } = await supabaseService
      .from('quotes')
      .select('*, product_id(*)')
      .ilike('name', `%${req.query.term}%`)
      .order('created_at', { ascending: false });

    res.status(200).send(quotes);
  }
}
