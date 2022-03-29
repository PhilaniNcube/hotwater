import { Fragment } from 'react';
import Head from 'next/head';
import ContactPage from '../components/Contact/Contact';

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hotwater24, supplier of qulaity gas geysers. Contact us and we will get back to you as soon as we can."
        />
        <meta name="keywords" content="contact us" />
      </Head>
      <ContactPage />
    </Fragment>
  );
};

export default Contact;
