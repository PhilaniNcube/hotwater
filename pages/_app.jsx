/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserProvider from '../Context/AuthContext';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { supabase } from '../utils/supabase';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === 'SIGNED_IN') {
          // TODO: Actions to Perform on Sign In
          console.log(event);
        }
        if (event === 'SIGNED_OUT') {
          // TODO: Actions to Perform on Logout
          console.log(event);
        }
      },
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const checkUser = () => {
    const user = supabase.auth.user();
  };

  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <Fragment>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </UserProvider>
    </Fragment>
  );
}

export default MyApp;
