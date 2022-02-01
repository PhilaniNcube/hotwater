/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Step4 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);
  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800">
          Geyser Location
        </h4>
        <div className="mt-6 md:mt-0">
          <button
            onClick={prevPage}
            className="mr-3 bg-gray-200 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700  px-5 py-2 text-sm"
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
        <div className="mt-2">
          <h3>Can the geyser be located on an outside wall?</h3>
          <div className="flex space-x-6">
            <div
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  locateOutside: true,
                });
              }}
              className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
            >
              {quoteInfo.locateOutside && (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <h3 className="font-medium text-orange-600">Yes</h3>
            </div>
            <div
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  locateOutside: false,
                });
              }}
              className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
            >
              {quoteInfo.locateOutside === false && (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
              </svg>
              <h3 className="font-medium text-orange-600">No</h3>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3>How do you currently heat up your water?</h3>
          <div className="mt-2 flex space-x-6">
            <div
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  waterHeater: 'electricity',
                });
              }}
              className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
            >
              {quoteInfo.waterHeater === 'electricity' && (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="font-medium text-orange-600">Electricty</h3>
            </div>{' '}
            <div
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  waterHeater: 'gas',
                });
              }}
              className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
            >
              {quoteInfo.waterHeater === 'gas' && (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <h3 className="font-medium text-orange-600">Gas</h3>
            </div>
            <div
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  waterHeater: 'other',
                });
              }}
              className=" h-36 aspect-square flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:bg-slate-200 rounded-md overflow-hidden relative"
            >
              {quoteInfo.waterHeater === 'other' && (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-medium text-orange-600">Other</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
