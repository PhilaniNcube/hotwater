import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import Footer from '../components/Layout/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
