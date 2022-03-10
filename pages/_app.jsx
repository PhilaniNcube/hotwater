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
import { AnimatePresence } from 'framer-motion';
import CartProvider from '../Context/CartContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
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
