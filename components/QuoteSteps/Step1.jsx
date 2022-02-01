/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Step1 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);
  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800">
          Household Size
        </h4>
        <div className="mt-6 md:mt-0">
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
        <div className="flex flex-wrap justify-between">
          <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="/images/children.jpg" alt="children" />
            <div className="px-5 pt-4 pb-6">
              <p className="text-xl font-semibold leading-tight text-gray-600">
                Children
              </p>
              <p className="text-sm leading-4 pt-3 text-gray-500">
                How many children in the house younger than 12 years of age?
              </p>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="children"
                  className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Children
                </label>
                <div className="relative">
                  <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                    <span className="text-xs leading-tight tracking-normal">
                      kids
                    </span>
                  </div>
                  <input
                    id="children"
                    name="children"
                    type="number"
                    value={quoteInfo.children}
                    onChange={(e) => {
                      setQuoteInfo({ ...quoteInfo, children: e.target.value });
                    }}
                    className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700  font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Teenagers */}
          <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="/images/teens.jpg" alt="teens" />
            <div className="px-5 pt-4 pb-6">
              <p className="text-xl font-semibold leading-tight text-gray-600">
                Teenagers
              </p>
              <p className="text-sm leading-4 pt-3 text-gray-500">
                How many teenagers in the house aged between 12 and 18 years of
                age?
              </p>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="teenagers"
                  className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Teenagers
                </label>
                <div className="relative">
                  <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                    <span className="text-xs leading-tight tracking-normal">
                      teens
                    </span>
                  </div>
                  <input
                    id="teenagers"
                    name="teenagers"
                    type="number"
                    value={quoteInfo.teenagers}
                    onChange={(e) => {
                      setQuoteInfo({ ...quoteInfo, teenagers: e.target.value });
                    }}
                    className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700  font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Adults */}
          <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src="/images/adults.jpg" alt="adults" />
            <div className="px-5 pt-4 pb-6">
              <p className="text-xl font-semibold leading-tight text-gray-600">
                Adults
              </p>
              <p className="text-sm leading-4 pt-3 text-gray-500">
                Please enter the number of adults in the household.
              </p>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="adults"
                  className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Adults
                </label>
                <div className="relative">
                  <div className="absolute text-gray-600 flex items-center px-3 border-r h-full">
                    <span className="text-xs leading-tight tracking-normal">
                      adults
                    </span>
                  </div>
                  <input
                    id="adults"
                    name="adults"
                    type="number"
                    value={quoteInfo.adults}
                    onChange={(e) => {
                      setQuoteInfo({ ...quoteInfo, adults: e.target.value });
                    }}
                    className="text-gray-600  focus:outline-none focus:border focus:border-indigo-700  font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
