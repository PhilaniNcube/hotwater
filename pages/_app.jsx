/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserProvider from '../Context/AuthContext';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
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
