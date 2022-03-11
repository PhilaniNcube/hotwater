import { supabase } from '../../utils/supabase';

export default async function handler(req, res) {
  let { data: products, error } = await supabase
    .from('products')
    .select(`*, brand_id( name)`);

  console.log(products);

  const data = await res.json(products);
}
