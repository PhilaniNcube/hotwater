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
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  id: 'GTM-WWK8FMB',
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

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
