import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchJson } from '../lib/requests';

const USER_QUERY_KEY = 'user';

export function useSignIn() {
  const queryClient = useQueryClient();

  const mutation = useMutation(async ({ email, password }) => {
    return await fetchJson('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });
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

  const mutation = useMutation(async ({ email, password, username }) => {
    return await fetchJson('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });
  });

  return {
    register: async (email, password, username) => {
      try {
        const user = await mutation.mutateAsync({ email, password, username });
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
  const mutation = useMutation(() => fetchJson('/api/logout'));
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
        return await fetchJson('/api/user');
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
