/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UserContext } from '../Context/UserContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <UserContext.Provider value="hello">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </UserContext.Provider>
    </Fragment>
  );
}

export default MyApp;
