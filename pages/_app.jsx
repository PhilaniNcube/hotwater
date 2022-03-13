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

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <Fragment>
      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />

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
