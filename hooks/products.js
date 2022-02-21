import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchJson } from '../lib/requests';
import { supabase } from '../utils/supabase';

const PRODUCTS_QUERY_KEY = 'products';

export function useProducts(flowRate) {
  const query = useQuery(
    PRODUCTS_QUERY_KEY,
    async () => {
      try {
        let { data: products, error } = await supabase
          .from('products')
          .select(`*, brand_id( name)`)
          .gte('flowRate', `${flowRate}`);

        return { products, error };
      } catch (error) {
        // not signed in
        return undefined;
      }
    },
    {
      staleTime: 30_000, //ms
      cacheTime: Infinity,
    },
  );

  return {
    products: query.data,
    productsIsLoading: query.isLoading,
    productsFetching: query.isFetching,
    productsError: query.isError,
  };
}
