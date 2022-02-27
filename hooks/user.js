import { useMutation, useQuery, useQueryClient } from 'react-query';
import { supabase } from '../utils/supabase';

const USER_QUERY_KEY = 'user';

export function useSignIn() {
  const queryClient = useQueryClient();

  const mutation = useMutation(async (email) => {
    let { user, error } = await supabase.auth.signIn({ email });

    console.log(error);

    return user;
  });

  return {
    signIn: async (email) => {
      try {
        const user = await mutation.mutateAsync(email);
        console.log('signin', user);
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

  const mutation = useMutation(async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    return user;
  });

  return {
    register: async (email, password) => {
      try {
        const user = await mutation.mutateAsync(email, password);
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
        let user = await supabase.auth.user();
        console.log('use user', user);

        return user;
      } catch (error) {
        // not signed in
        return undefined;
      }
    },
    {
      staleTime: 10_000,
      cacheTime: Infinity,
    },
  );

  return query.data;
}
