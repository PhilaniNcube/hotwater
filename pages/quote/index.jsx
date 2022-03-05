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

const index = () => {
  const [page, setPage] = useState(1);

  const { user } = useUser();

  const [quoteInfo, setQuoteInfo] = useState({
    children: 0,
    teenagers: 0,
    adults: 0,
    houseType: '',
    ownership: null,
    gasSupply: '',
    gasStove: false,
    gasWaterHeating: false,
    gasHeating: false,
    noGasUse: false,
    locateOutside: false,
    waterHeater: '',
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
    completeSolution: false,
    product_id: null,
  });

  const nextPage = () => {
    if (page === 11) return;
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  if (user === null || user === undefined) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] w-[90%] mx-auto">
        <p className="text-lg text-center font-bold ">Please sign in first</p>
        <Link href="/signin" passHref>
          <button className="bg-blue-600 text-white font-bold text-lg mt-8 rounded px-6 py-2">
            Sign In
          </button>
        </Link>
      </div>
    );
  }

  if (user) {
    return (
      <Fragment>
        <Head>
          <title>Hotwater24 | Quote</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
          <Confirm
            quoteInfo={quoteInfo}
            setQuoteInfo={setQuoteInfo}
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
          />
        )}
      </Fragment>
    );
  }
};

export default index;
