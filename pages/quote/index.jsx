/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import PropertyType from '../../components/QuoteSteps/PropertyType';
import Confirm from '../../components/QuoteSteps/Confirm';
import PageTransitions from '../../components/PageTransitions';
import Step10 from '../../components/QuoteSteps/Step10';
import { useUser } from '../../Context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import getProducts from '../../lib/getProducts';
import { useQuery } from 'react-query';
import analytics from '../../utils/analytics';
import { supabase } from '../../utils/supabase';
import OwnerStatus from '../../components/QuoteSteps/OwnerStatus';
import GasSupply from '../../components/QuoteSteps/GasSupply';
import GasUse from '../../components/QuoteSteps/GasUse';
import WaterHeating from '../../components/QuoteSteps/WaterHeating';
import WaterOutlets from '../../components/QuoteSteps/WaterOutlests';
import Recommendations from '../../components/QuoteSteps/Recommendations';
import Savings from '../../components/QuoteSteps/Savings';
import Financing from '../../components/QuoteSteps/Financing';
import PersonalDetails from '../../components/QuoteSteps/PersonalDetails';
import Summary from '../../components/QuoteSteps/Summary';
import { AnimatePresence } from 'framer-motion';
import Family from '../../components/QuoteSteps/Step1';

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
    bathroomSink: 0,
    kitchenSink: 0,
    dishwasher: 0,
    washingmachine: 0,
    flowRate: 0,
    offGrid: null,
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
    installation: null,
    contactDay: '',
    contactTime: '',
    financing: '',
    geyserPrice: null,
    monthlySavings: 200,
    yearlySavings: 2400,
    geyserSize: null,
    installationCost: null,
    plumbingCost: null,
    comments: ''
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
      <AnimatePresence exitBeforeEnter={true} >
      <div className="relative ">
      {page === 1 && (
        <Family
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 2 && (
        <PropertyType
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 3 && (
        <OwnerStatus
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 4 && (
        <GasSupply
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 5 && (
        <GasUse
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}
      {page === 6 && (
        <WaterHeating
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}

      {page === 7 && (
        <WaterOutlets
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}

      {  /*page === 8 && (
        <Savings
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )*/}
       {page === 8 && (
        <Recommendations
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )}



      {page === 9 && (
        <PersonalDetails
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
          page={page}
        />
      )}

      {/*page === 10 && (
        <Summary
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
        />
      )*/}
      {page === 10 && (
        <Confirm
          quoteInfo={quoteInfo}
          setQuoteInfo={setQuoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}

          products={products}
        />
        )}

        </div>
        </AnimatePresence>
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
