import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import CTA from '../components/Homepage/CTA';
import Save from '../components/Homepage/Save';
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
          content="xzxztrfeisy3fc2yb2pzfep46ec009"
        />
        <meta
          name="description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater"
        />
        <link rel="canonical" href="https://www.hotwater24.com" />
      </Head>
      <Slider />
      <CTA />
      <Save />
    </Fragment>
  );
}
