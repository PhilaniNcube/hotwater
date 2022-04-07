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

  console.log(products);

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
    city: '',
    telephoneNumber: '',
    postalCode: '',
    completeSolution: null,
    product_id: null,
    installation: null,
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
