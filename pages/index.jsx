import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import CTA from '../components/Homepage/CTA';
import Save from '../components/Homepage/Save';
import Hero from '../components/Homepage/Hero';
import Slider from '../components/Homepage/Slider';

import { useQuotes } from '../hooks/quotes';

export default function Home() {
  const router = useRouter();

  const { quotes } = useQuotes();

  return (
    <Fragment>
      <Head>
        <title>Hotwater24</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="facebook-domain-verification"
          content="7q8nm0mqvlm0sru220aybuo5y5o1ca"
        />
        <meta
          name="description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas geyser installation, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater, switch to a gas geyser"
        />
        <meta name="og:title" content="Hotwater24" />
        <meta
          name="og:description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="og:image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta name="og:url" content={`https://www.hotwater24.com`} />
        <meta name="og:site_name" content="Hotwater24" />
        <meta name="og:locale" content="en_ZA" />
        <meta name="og:type" content="home page"></meta>

        <meta name="product:price:currency" content="ZAR" />

        <link rel="canonical" href="https://www.hotwater24.com" />
      </Head>
      <Hero />
      <CTA />
      <Save />
    </Fragment>
  );
}
