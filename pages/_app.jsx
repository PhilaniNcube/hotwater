import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
