/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import InstallationType from '../../components/QuoteSteps/InstallationType';
import TypeOfGeyser from '../../components/QuoteSteps/TypeOfGeyser';
import HouseholdDetails from '../../components/QuoteSteps/HouseholdDetails';

const index = () => {
  const [page, setPage] = useState(1);

  const [quoteInfo, setQuoteInfo] = useState({
    newGeyser: false,
    geyserType: '',
    typeOfHouse: '',
    occupants: 2,
    bathrooms: 2,
    showerType: '',
    simultaneousUse: true,
    houseArea: 150,
    thatched: false,
    serviceContractor: false,
  });

  const nextPage = () => {
    if (page === 4) return;
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  console.log('page', page);

  return (
    <Fragment>
      {page === 1 && (
        <TypeOfGeyser
          quoteInfo={quoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          setQuoteInfo={setQuoteInfo}
          page={page}
        />
      )}
      {page === 2 && (
        <InstallationType
          quoteInfo={quoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          setQuoteInfo={setQuoteInfo}
          page={page}
        />
      )}
      {page === 3 && (
        <HouseholdDetails
          quoteInfo={quoteInfo}
          nextPage={nextPage}
          prevPage={prevPage}
          setQuoteInfo={setQuoteInfo}
          page={page}
        />
      )}
    </Fragment>
  );
};

export default index;
