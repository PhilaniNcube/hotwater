/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TypeOfGeyser = ({
  quoteInfo,
  nextPage,
  prevPage,
  setQuoteInfo,
  page,
}) => {
  console.log(quoteInfo);

  return (
    <div>
      <div>
        <div className="container mx-auto shadow bg-white mt-4 rounded">
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 w-full lg:w-1/4 py-5 bg-gray-100  px-12 relative border-gray-500 border-r rounded-tl">
              <div className="absolute bottom-0 right-0 text-indigo-700 ">
                <img src="/images/logo-01.svg" alt="" />
              </div>
              <div className="flex justify-center flex-col items-center text-indigo-700 ">
                <img src="/images/logo-01.svg" alt="" className="h-16" />
                <p className="text-base font-bold mt-4">Hotwater24</p>
              </div>
              <ul className="mt-20">
                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                  <div className="h-8 flex items-center justify-center border-indigo-700  font-bold bg-indigo-700 w-8 rounded-full border shadow text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-indigo-700 text-lg font-normal ml-4">
                    Select Installation Type
                  </p>
                </li>
                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                  <div className="h-8 flex items-center justify-center border-indigo-700 font-bold text-indigo-700 w-8 rounded-full border">
                    2
                  </div>
                  <p className="text-gray-800 text-lg font-normal ml-4">
                    Select Geyser Type
                  </p>
                </li>
                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                  <div className="h-8 flex items-center justify-center border-indigo-700  font-bold text-indigo-700 w-8 rounded-full border">
                    3
                  </div>
                  <p className="text-gray-600 text-lg font-normal ml-4">
                    Building Details
                  </p>
                </li>
                <li className="flex items-center cursor-pointer">
                  <div className="h-8 flex items-center justify-center border-indigo-700  font-bold text-indigo-700 w-8 rounded-full border">
                    4
                  </div>
                  <p className="text-gray-600  text-lg font-normal ml-4">
                    Account Settings
                  </p>
                </li>
              </ul>
            </div>
            <div className="xl:w-3/4 w-full lg:w-3/4">
              <div className="xl:w-full pb-8 pt-10">
                <div className="flex items-center w-11/12 mx-auto">
                  <p className="text-xl text-gray-800 font-bold">
                    What type of geyser installation are you looking for?
                  </p>
                  <div className="ml-2 cursor-pointer text-gray-600 "></div>
                </div>
              </div>

              <div className="w-11/12 mx-auto mb-10">
                <div className="w-full xl:w-9/12 mx-auto xl:mx-0 flex flex-col md:flex-row items-center md:justify-between">
                  <button
                    className="mt-16 flex flex-col text-white font-medium px-8 py-8 w-[80%] md:w-[40%] items-center rounded shadow-md bg-blue-600 cursor-pointer focus:ring-2 ring-gray-500 focus:shadow-2xl"
                    onClick={() => {
                      setQuoteInfo({
                        ...quoteInfo,
                        newGeyser: true,
                      });
                    }}
                  >
                    New Gas Geyser
                  </button>
                  <button
                    className="mt-16 flex flex-col text-white font-medium px-8 py-8 w-[80%] md:w-[40%] items-center rounded shadow-md bg-blue-600 cursor-pointer focus:ring-2 ring-gray-500 focus:shadow-2xl"
                    onClick={() => {
                      setQuoteInfo({
                        ...quoteInfo,
                        newGeyser: false,
                      });
                    }}
                  >
                    Already Have One
                  </button>
                </div>
              </div>

              <div className="w-full py-4 sm:px-8 px-5 bg-gray-100  flex justify-end">
                <button
                  disabled={true}
                  onClick={prevPage}
                  className="btn text-sm focus:outline-none text-gray-600  border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Back
                </button>
                <button
                  className="btn text-sm focus:outline-none text-white bg-indigo-700 py-2 px-8 rounded transition duration-150 ease-in-out hover:bg-indigo-600"
                  type="submit"
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TypeOfGeyser;
