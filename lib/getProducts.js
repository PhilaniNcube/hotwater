import { supabase } from '../utils/supabase';

async function getProducts() {
  let { data: products, error } = await supabase.from('products').select('*');

  return products;
}

export default getProducts;
