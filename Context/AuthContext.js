/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabase';
import axios from 'axios';
import analytics from '../utils/analytics';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();
const supabase = useSupabaseClient();
 const user = useUser();

  const signOut = async () => {
    let { error } = await supabase.auth.signOut();
    setUser(null);
    analytics.track('logout');
    router.push('/');
  };

  const signIn = (email) => {
    let { user, error } = supabase.auth.signIn({
      email,
    });
  };

  const signUp = async (email, password) => {
    let { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(user, error);

    if (user) {
      router.push('/');
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async () => {
      setUser(supabase.auth.user());
    });
  }, []);

  useEffect(() => {
    axios.post('/api/set-supabase-cookie', {
      event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
      session: supabase.auth.session(),
    });
  }, [user]);

  const exposed = {
    user,
    signOut,
    signIn,
    signUp,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
