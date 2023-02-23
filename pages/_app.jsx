/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import UserProvider from '../Context/AuthContext';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartProvider from '../Context/CartContext';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import analytics from '../utils/analytics';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <Fragment>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </CartProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SessionContextProvider>
    </Fragment>
  );
}

export default MyApp;
