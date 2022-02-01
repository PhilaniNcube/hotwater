/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Step5 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  let showers = 0;

  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800">
          Bathroom & Kitchen Usage
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
        How many of these water outlets do you have in the house?
        <div className="flex flex-wrap space-x-8">
          <div className="mt-4">
            <img
              src="/images/shower.webp"
              alt="shower"
              className="aspect-square h-40 w-40"
            />
            <p className="font-medium">Standard Shower</p>
            <div>
              <select
                onChange={(e) => {
                  setQuoteInfo({
                    ...quoteInfo,
                    standardShower: e.target.value,
                  });
                }}
                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <img
              src="/images/rainshower.jpg"
              alt="shower"
              className="aspect-square h-40 w-40"
            />
            <p className="font-medium">Rain Shower</p>
            <div>
              <select
                onChange={(e) => {
                  setQuoteInfo({
                    ...quoteInfo,
                    rainShower: e.target.value,
                  });
                }}
                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <img
              src="/images/kitchen-sink.jpg"
              alt="kitchenTap"
              className="aspect-square h-40 w-40"
            />
            <p className="font-medium">Kitchen Sink/Tap</p>
            <div>
              <select
                onChange={(e) => {
                  setQuoteInfo({
                    ...quoteInfo,
                    kitchenTap: e.target.value,
                  });
                }}
                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <img
              src="/images/bath.jpg"
              alt="bath"
              className="aspect-square h-40 w-40"
            />
            <p className="font-medium">Bathtub</p>
            <div>
              <select
                onChange={(e) => {
                  setQuoteInfo({
                    ...quoteInfo,
                    bathtub: e.target.value,
                  });
                }}
                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <img
              src="/images/bathroom-sink.webp"
              alt="bathroom-sink"
              className="aspect-square h-40 w-40"
            />
            <p className="font-medium">Bathroom Sink</p>
            <div>
              <select
                onChange={(e) => {
                  setQuoteInfo({
                    ...quoteInfo,
                    sink: e.target.value,
                  });
                }}
                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <img
              src="/images/dishwasher.webp"
              alt="dishwasher"
              className="aspect-square h-40 w-40"
            />
            <p className="font-medium">Dishwasher</p>
            <div>
              <select
                onChange={(e) => {
                  setQuoteInfo({
                    ...quoteInfo,
                    dishwasher: e.target.value,
                  });
                }}
                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
