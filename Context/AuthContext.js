import { createContext, useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabase';

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(supabase.auth.user());

  const signOut = async () => {
    let { error } = await supabase.auth.signOut();
    router.push('/');
  };

  const signIn = (email) => {
    let { user, error } = supabase.auth.signIn({
      email,
    });

    console.log('user', user);
    console.log('error', error);
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(() => {
      setUser(supabase.auth.user());
    });
  }, []);

  const exposed = {
    user,
    signOut,
    signIn,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
