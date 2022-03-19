/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import UserProvider from '../Context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GTM_ID, pageview } from '../utils/gtm';
import CartProvider from '../Context/CartContext';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import analytics from '../utils/analytics';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    analytics.page();
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
