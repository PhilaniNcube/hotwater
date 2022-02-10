import React from 'react';

const Step2 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const homeType = (type) => {
    setQuoteInfo({ ...quoteInfo, houseType: type });
  };

  return (
    <div className="max-w-6xl mx-auto my-16">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Type of house
      </h1>

      <p className="py-3 text-center">
        Tell us which of the below best describes the type of house you live in
      </p>

      <div className="py-8 max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('appartment')}
        >
          {quoteInfo.houseType === 'appartment' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">
            Appartment
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('semi-detached')}
        >
          {quoteInfo.houseType === 'semi-detached' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">
            Semi-detached
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('free-standing')}
        >
          {quoteInfo.houseType === 'free-standing' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">
            Free-standing
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('cornerhouse')}
        >
          {quoteInfo.houseType === 'cornerhouse' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">
            Cornerhouse
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('two-in-one')}
        >
          {quoteInfo.houseType === 'two-in-one' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">
            Two In One
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('villa')}
        >
          {quoteInfo.houseType === 'villa' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">Villa</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('farm')}
        >
          {quoteInfo.houseType === 'farm' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">Farm</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('commercial')}
        >
          {quoteInfo.houseType === 'commercial' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p className="text-lg text-center text-sky-500 font-bold">
            Commercial
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6">
        <svg
          onClick={prevPage}
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        <button
          onClick={nextPage}
          className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step2;
