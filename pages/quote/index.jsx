/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import Step1 from '../../components/QuoteSteps/Step1';
import Step2 from '../../components/QuoteSteps/Step2';
import Step3 from '../../components/QuoteSteps/Step3';
import Step4 from '../../components/QuoteSteps/Step4';
import Step5 from '../../components/QuoteSteps/Step5';
import Step6 from '../../components/QuoteSteps/Step6';
import Confirm from '../../components/QuoteSteps/Confirm';

const index = () => {
  const [page, setPage] = useState(1);

  const [quoteInfo, setQuoteInfo] = useState({
    children: 0,
    teenagers: 0,
    adults: 2,
    houseType: '',
    ownership: false,
    gasSupply: '',
    gasStove: false,
    gasGrill: false,
    gasHeating: false,
    locateOutside: false,
    waterHeater: '',
    standardShower: 0,
    rainShower: 0,
    kitchenTap: 0,
    bathtub: 0,
    sink: 0,
    dishwasher: 0,
    flowRate: 0,
    offGrid: false,
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    telephoneNumber: '',
    completeSolution: false,
  });

  const nextPage = () => {
    if (page === 7) return;
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  return (
    <Fragment>
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
};

export default index;
