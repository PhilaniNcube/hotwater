import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchJson } from '../lib/requests';

const PRODUCTS_QUERY_KEY = 'products';

export function useProducts() {
  const query = useQuery(
    PRODUCTS_QUERY_KEY,
    async () => {
      try {
        return await fetchJson('/api/products');
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
