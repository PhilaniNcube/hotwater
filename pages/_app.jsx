/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useUser } from '../hooks/user';
import { supabase } from '../utils/supabase';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] = useState(
    'not-authenticated',
  );

  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === 'SIGNED_IN') {
          setAuthenticatedState('authenticated');
        }
        if (event === 'SIGNED_OUT') {
          setAuthenticatedState('not-authenticated');
        }
      },
    );

    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function handleAuthChange(event, session) {
    console.log(event, session);

    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  }

  async function checkUser() {
    const user = await supabase.auth.user();

    if (user) {
      setAuthenticatedState('authenticated');
      router.push('/profile');
    }
  }

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Fragment>
  );
}

export default MyApp;
