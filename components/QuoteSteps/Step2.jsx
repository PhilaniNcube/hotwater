import React from 'react';

const Step2 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);
  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800">
          House Details
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
        <h2 className="text-md font-bold">What Type Of House Do You Have?</h2>
        <h3 className="text-sm font-medium">Select only one</h3>
        <div className="mt-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto">
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() =>
              setQuoteInfo({ ...quoteInfo, houseType: 'appartment' })
            }
          >
            {quoteInfo.houseType === 'appartment' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Appartment
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() =>
              setQuoteInfo({ ...quoteInfo, houseType: 'semidetached' })
            }
          >
            {quoteInfo.houseType === 'semidetached' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Semi-detatched
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() =>
              setQuoteInfo({ ...quoteInfo, houseType: 'freestanding' })
            }
          >
            {quoteInfo.houseType === 'freestanding' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Free Standing
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() =>
              setQuoteInfo({ ...quoteInfo, houseType: 'cornerhouse' })
            }
          >
            {quoteInfo.houseType === 'cornerhouse' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Cornerhouse
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() => setQuoteInfo({ ...quoteInfo, houseType: 'flat' })}
          >
            {quoteInfo.houseType === 'flat' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Flat
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() => setQuoteInfo({ ...quoteInfo, houseType: '2-in-1' })}
          >
            {quoteInfo.houseType === '2-in-1' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            2-in-1
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() => setQuoteInfo({ ...quoteInfo, houseType: 'villa' })}
          >
            {quoteInfo.houseType === 'villa' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Villa
          </button>
          <button
            className="bg-orange-600 h-20 w-40 rounded shadow hover:shadow-xl text-gray-200  font-medium relative flex flex-col items-center justify-center"
            onClick={() => setQuoteInfo({ ...quoteInfo, houseType: 'farm' })}
          >
            {quoteInfo.houseType === 'farm' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
            Farm
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-md font-bold">
            Do you own the house or are you renting?
          </h2>
          <div className="mt-4 flex">
            <button
              onClick={() => setQuoteInfo({ ...quoteInfo, ownership: true })}
              className="mx-2 my-2 bg-orange-600 transition duration-150 ease-in-out hover:bg-orange-700 rounded text-white px-16 py-4 text-xl relative"
            >
              {quoteInfo.ownership && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
              Owner
            </button>
            <button
              onClick={() => setQuoteInfo({ ...quoteInfo, ownership: false })}
              className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-16 py-4 text-xl relative"
            >
              {quoteInfo.ownership === false && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-0 right-0 bg-white text-orange-600"
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
              Renter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
