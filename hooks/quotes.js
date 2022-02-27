import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchJson } from '../lib/requests';
import { supabase } from '../utils/supabase';

const QUOTES_QUERY = 'quotes';

export function useQuotes() {
  const query = useQuery(
    QUOTES_QUERY,
    async () => {
      try {
        let { data: quotes, error } = await supabase.from('quotes').select(`*`);

        return { quotes, error };
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
    quotes: query.data,
    quotesIsLoading: query.isLoading,
    quotesFetching: query.isFetching,
    quotesError: query.isError,
  };
}
