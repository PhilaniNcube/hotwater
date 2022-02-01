/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Step3 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800">
          Current Gas Supply & Installation
        </h4>
        <div className="mt-6 md:mt-0">
          <button
            onClick={prevPage}
            className="mr-3 bg-gray-200  focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700  px-5 py-2 text-sm"
          >
            Back
          </button>
          <button
            onClick={nextPage}
            className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
          >
            Next Page
          </button>
        </div>
      </div>
      {/* Header Ends */}
      <div className="mt-4">
        <h2 className="text-md font-bold">
          What type of gas supply do you have to your home?
        </h2>
        <div className="flex space-x-6 mt-6">
          <div
            onClick={() => setQuoteInfo({ ...quoteInfo, gasSupply: 'piped' })}
            className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
          >
            {quoteInfo.gasSupply === 'piped' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-orange-600 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            <img
              className="aspect-square h-28"
              src="/images/pipeline.png"
              alt=""
            />
            <h3 className="font-medium text-orange-600">Piped Gas</h3>
          </div>
          <div
            onClick={() =>
              setQuoteInfo({ ...quoteInfo, gasSupply: 'cylinder' })
            }
            className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
          >
            {quoteInfo.gasSupply === 'cylinder' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-orange-600 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            <img
              className="aspect-square h-28"
              src="/images/cylinder.png"
              alt=""
            />
            <h3 className="font-medium text-orange-600">Gas Cylinder</h3>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-md font-bold">What do/will you use gas for?</h2>
        <div className="flex space-x-6 mt-6">
          <div
            onClick={() => {
              setQuoteInfo({
                ...quoteInfo,
                gasStove: true,
              });
              setClicked1(true);
            }}
            className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
          >
            {quoteInfo.gasStove && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-orange-600 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            <img
              className="aspect-square h-28"
              src="/images/stove.png"
              alt=""
            />
            <h3 className="font-medium text-orange-600">Stove</h3>
          </div>
          <div
            onClick={() => {
              setQuoteInfo({
                ...quoteInfo,
                gasGrill: true,
              });
              setClicked2(true);
            }}
            className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
          >
            {quoteInfo.gasGrill && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-orange-600 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            <img
              className="aspect-square h-28"
              src="/images/grill.png"
              alt=""
            />
            <h3 className="font-medium text-orange-600">BBQ</h3>
          </div>
          <div
            onClick={() => {
              setQuoteInfo({
                ...quoteInfo,
                gasHeating: true,
              });
              setClicked3(true);
            }}
            className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
          >
            {quoteInfo.gasHeating && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-orange-600 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            <img
              className="aspect-square h-28"
              src="/images/heating.png"
              alt=""
            />
            <h3 className="font-medium text-orange-600">Heating</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
