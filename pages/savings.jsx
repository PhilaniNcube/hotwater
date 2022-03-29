import React, { Fragment } from 'react';
import Savings from '../components/Stats/Savings';
import Head from 'next/head';

const savings = () => {
  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Savings</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Calculate you monthly savings on your electricity bill"
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater, save on electricity"
        />
        <link rel="canonical" href="https://www.hotwater24.com/savings" />
      </Head>
      <Savings />
    </Fragment>
  );
};

export default savings;
