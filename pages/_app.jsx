/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import UserProvider from '../Context/AuthContext';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Script from 'next/script';
import CartProvider from '../Context/CartContext';
import { GTMPageView } from '../utils/gtm';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', GTMPageView);
    return () => {
      router.events.off('routeChangeComplete', GTMPageView);
    };
  }, [router.events]);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
            })(window,document,'script','dataLayer', 'GTM-WWK8FMB');
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
