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
      staleTime: 0, //ms
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

export function useQuote(id) {
  const query = useQuery(
    'quote',
    async () => {
      try {
        let { data: quote, error } = await supabase
          .from('quotes')
          .select('*')
          .eq('id', id);

        return { quote, error };
      } catch (error) {
        // not signed in
        return undefined;
      }
    },
    {
      staleTime: 0, //ms
      cacheTime: Infinity,
    },
  );

  return {
    quote: query.data,
    quoteIsLoading: query.isLoading,
    quoteFetching: query.isFetching,
    quoteError: query.isError,
  };
}
