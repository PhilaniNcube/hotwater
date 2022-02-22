import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchJson } from '../lib/requests';
import { supabase } from '../utils/supabase';

const USER_QUERY_KEY = 'user';

export function useSignIn() {
  const queryClient = useQueryClient();

  const mutation = useMutation(async ({ email, password }) => {
    let { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    console.log(user, error);

    return { user, error };
  });

  return {
    signIn: async (email, password) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        queryClient.setQueryData(USER_QUERY_KEY, user);
        return true;
      } catch (error) {
        return false;
      }
    },
    signInError: mutation.isError,
    signInLoading: mutation.isLoading,
  };
}

export function useRegister() {
  const queryClient = useQueryClient();

  const mutation = useMutation(async ({ email, password }) => {
    return await supabase.auth.signUp({
      email,
      password,
    });
  });

  return {
    register: async (email, password) => {
      try {
        const user = await mutation.mutateAsync({ email, password });
        console.log(user);
        queryClient.setQueryData(USER_QUERY_KEY, user);
        return true;
      } catch (error) {
        return false;
      }
    },
    registerError: mutation.isError,
    registerLoading: mutation.isLoading,
  };
}

export function useSignOut() {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => supabase.auth.signOut());
  return async () => {
    await mutation.mutateAsync();
    queryClient.setQueryData(USER_QUERY_KEY, undefined);
  };
}

export function useUser() {
  const query = useQuery(
    USER_QUERY_KEY,
    async () => {
      try {
        return await supabase.auth.user();
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

  return query.data;
}
