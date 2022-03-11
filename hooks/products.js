import { useQuery } from 'react-query';
import { fetchJson } from '../lib/requests';
import { supabase } from '../utils/supabase';

const PRODUCTS_QUERY_KEY = 'products';

export function useProducts(flowRate, data) {
  const query = useQuery(
    PRODUCTS_QUERY_KEY,
    async () => {
      try {
        let { data: products, error } = await supabase
          .from('products')
          .select(`*, brand_id( name)`)
          .gte('flowRate', `${parseInt(flowRate)}`)
          .eq('inStock', true)
          .order('flowRate', { ascending: false });

        return { products, error };
      } catch (error) {
        // not signed in
        return undefined;
      }
    },
    {
      staleTime: 0, //ms
      cacheTime: Infinity,
      initialData: data,
    },
  );

  return {
    products: query.data,
    productsIsLoading: query.isLoading,
    productsFetching: query.isFetching,
    productsError: query.isError,
  };
}

export function useCartProducts() {
  const query = useQuery(PRODUCTS_QUERY_KEY, async () => {
    try {
      let { data: products, error } = await supabase
        .from('products')
        .select(`*, brand_id( name)`);

      return { products, error };
    } catch (error) {
      // not signed in
      return undefined;
    }
  });

  return {
    products: query.data,
    productsIsLoading: query.isLoading,
    productsFetching: query.isFetching,
    productsError: query.isError,
  };
}
