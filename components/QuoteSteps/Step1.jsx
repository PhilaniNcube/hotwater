/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';

const Step1 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const decrementChildren = () => {
    console.log('Decrement');

    const qty = quoteInfo.children - 1;
    setQuoteInfo({ ...quoteInfo, children: qty });
  };

  const incrementChildren = () => {
    console.log('Increment');

    const qty = quoteInfo.children + 1;

    setQuoteInfo({ ...quoteInfo, children: qty });
  };

  const decrementTeenagers = () => {
    console.log('Decrement');

    const qty = quoteInfo.teenagers - 1;
    setQuoteInfo({ ...quoteInfo, teenagers: qty });
  };

  const incrementTeenagers = () => {
    console.log('Increment');

    const qty = quoteInfo.teenagers + 1;

    setQuoteInfo({ ...quoteInfo, teenagers: qty });
  };

  const decrementAdults = () => {
    console.log('Decrement');

    const qty = quoteInfo.adults - 1;
    setQuoteInfo({ ...quoteInfo, adults: qty });
  };

  const incrementAdults = () => {
    console.log('Increment');

    const qty = quoteInfo.adults + 1;

    setQuoteInfo({ ...quoteInfo, adults: qty });
  };

  return (
    <Fragment>
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Size of Household
      </h1>

      <p className="py-3 text-center">
        Tell us how many children, teenagers and adults live in your house
      </p>

      <div className="flex items-center py-8 justify-around max-w-6xl mx-auto flex-wrap space-y-10 lg:space-y-0">
        <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-sm py-8">How Many Children?</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.children === 0}
              onClick={decrementChildren}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, children: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.children}
            ></input>
            <button
              data-action="increment"
              onClick={incrementChildren}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-sky-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
            />
          </svg>
          <p className="text-sm py-8">How many teenagers?</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.teenagers === 0}
              onClick={decrementTeenagers}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, teenagers: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.teenagers}
            ></input>
            <button
              data-action="increment"
              onClick={incrementTeenagers}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-sky-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <p className="text-sm py-8 text-center">How many adults?</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.adults === 0}
              onClick={decrementAdults}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, adults: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.adults}
            ></input>
            <button
              data-action="increment"
              onClick={incrementAdults}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-1 flex justify-center">
        <button
          onClick={nextPage}
          className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
        >
          Continue
        </button>
      </div>
    </Fragment>
  );
};

export default Step1;
