/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import UserProvider from '../Context/AuthContext';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Script from 'next/script';
import CartProvider from '../Context/CartContext';
import { GTMPageView } from '../utils/gtm';

const tagManagerArgs = {
  id: 'GTM-WWK8FMB',
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Router.events.on('routeChangeComplete', GTMPageView);
    return () => {
      Router.events.off('routeChangeComplete', GTMPageView);
    };
  }, [Router.events]);

  return (
    <Fragment>
      <UserProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />

            <ReactQueryDevtools />
          </QueryClientProvider>
        </CartProvider>
      </UserProvider>
    </Fragment>
  );
}

export default MyApp;
