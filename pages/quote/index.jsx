/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import Step1 from '../../components/QuoteSteps/Step1';
import Step2 from '../../components/QuoteSteps/Step2';
import Step3 from '../../components/QuoteSteps/Step3';
import Step4 from '../../components/QuoteSteps/Step4';
import Step5 from '../../components/QuoteSteps/Step5';
import Step6 from '../../components/QuoteSteps/Step6';
import Confirm from '../../components/QuoteSteps/Confirm';
import PageTransitions from '../../components/PageTransitions';
import Step7 from '../../components/QuoteSteps/Step7';
import Step8 from '../../components/QuoteSteps/Step8';
import Step9 from '../../components/QuoteSteps/Step9';
import Step10 from '../../components/QuoteSteps/Step10';
import { useUser } from '../../Context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Step11 from '../../components/QuoteSteps/Step11';
import Step12 from '../../components/QuoteSteps/Step12';
import getProducts from '../../lib/getProducts';
import { useQuery } from 'react-query';
import analytics from '../../utils/analytics';
import { supabase } from '../../utils/supabase';

const index = ({ initialProducts }) => {
  const [page, setPage] = useState(1);

  const { data: products } = useQuery('products', getProducts, {
    initialData: initialProducts,
  });

  const { user } = useUser();

  const [quoteInfo, setQuoteInfo] = useState({
    children: 0,
    teenagers: 0,
    adults: 0,
    houseType: '',
    ownership: null,
    gasSupply: '',
    gasStove: null,
    gasWaterHeating: true,
    gasHeating: null,
    otherGasUse: '',
    locateOutside: null,
    electricGeyser: null,
    gasGeyser: null,
    solarGeyser: null,
    otherGeyser: null,
    standardShower: 0,
    rainShower: 0,
    bathtub: 0,
    sink: 0,
    dishwasher: 0,
    washingmachine: 0,
    flowRate: 0,
    offGrid: false,
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    suburb: '',
    city: '',
    telephoneNumber: '',
    postalCode: '',
    completeSolution: null,
    product_id: null,
    installation: true,
  });

  const nextPage = () => {
    if (page === 13) return;
    analytics.track(`step_${page}`);
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Submit A Request</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Submit a quote request." />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What do I need to know before buying a gas geyser?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      '<p>The most important thing to know about buying a gas geyser is your expected flow rate. You need to know your flow rate so that you can select the right geyser for your property or house.</p>',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is flow rate calculated?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      '<p>Flow rate is calculated by determing the amount of water coming out of all your hot water outlets in a minute.</p>',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you install the gas geysers?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      '<p>We work with certified gas geyser installers. Should you take up the installation offer that we can give you, we will coordinate the whole installation process.</p>',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I buy the gas geyser on credit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      '<p>Through our partners at Mobicred we are able to offer you the option to pay for the gas geyser over 12 months.</p>',
                  },
                },
                {
                  '@type': 'Question',
                  name:
                    'How much cheaper will my electricity bill be when I switch to a gas geyser?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      '<p>You can expect to save up to 20% a month on your electricity bill when you switch to using a gas geyser.</p>',
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {page === 1 && (
        <Step1
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 2 && (
        <Step2
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 3 && (
        <Step3
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 4 && (
        <Step4
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 5 && (
        <Step5
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 6 && (
        <Step6
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 7 && (
        <Step7
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 8 && (
        <Step8
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 9 && (
        <Step9
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 10 && (
        <Step10
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}

      {page === 11 && (
        <Step11
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}

      {page === 12 && (
        <Step12
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 13 && (
        <Confirm
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          products={products}
        />
      )}
    </Fragment>
  );
};

export default index;

export async function getServerSideProps({}) {
  let { data: products, error } = await supabase
    .from('products')
    .select(`*`)
    .eq('inStock', true)
    .order('brand_id', { ascending: false });

  return {
    props: {
      initialProducts: products,
      error,
    },
  };
}
