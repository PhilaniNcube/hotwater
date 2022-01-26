/* eslint-disable @next/next/no-img-element */
import React from 'react';

const InstallationType = ({
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
                  <div className="h-8 flex items-center justify-center border-indigo-700  font-bold  w-8 rounded-full border shadow text-indigo-700">
                    1
                  </div>
                  <p className="text-gray-800 text-lg font-normal ml-4">
                    Select Installation Type
                  </p>
                </li>
                <li className="flex items-center sm:mb-16 mb-12 cursor-pointer">
                  <div className="h-8 flex items-center justify-center border-indigo-700 font-bold text-white bg-indigo-700 w-8 rounded-full border">
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
                  <div className="flex md:flex-row flex-col items-center md:justify-between space-x-4 py-8 px-4">
                    <div
                      className="flex flex-col items-center bg-gray-100 hover:shadow cursor-pointer py-10 px-14 md:mt-0 mt-4 focus:bg-slate-400"
                      onClick={() => {
                        setQuoteInfo({
                          ...quoteInfo,
                          geyserType: 'budget',
                        });
                      }}
                    >
                      <svg
                        width={84}
                        height={84}
                        viewBox="0 0 84 84"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Molecule logo"
                      >
                        <path
                          d="M44.8455 58.779L64.75 64.75M19.25 19.25L25.221 39.1475L19.25 19.25Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40.8906 43.1095L64.7501 19.25"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.25 24.5C22.1495 24.5 24.5 22.1495 24.5 19.25C24.5 16.3505 22.1495 14 19.25 14C16.3505 14 14 16.3505 14 19.25C14 22.1495 16.3505 24.5 19.25 24.5Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M64.75 24.5C67.6495 24.5 70 22.1495 70 19.25C70 16.3505 67.6495 14 64.75 14C61.8505 14 59.5 16.3505 59.5 19.25C59.5 22.1495 61.8505 24.5 64.75 24.5Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M64.75 70C67.6495 70 70 67.6495 70 64.75C70 61.8505 67.6495 59.5 64.75 59.5C61.8505 59.5 59.5 61.8505 59.5 64.75C59.5 67.6495 61.8505 70 64.75 70Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29.75 70C38.4485 70 45.5 62.9485 45.5 54.25C45.5 45.5515 38.4485 38.5 29.75 38.5C21.0515 38.5 14 45.5515 14 54.25C14 62.9485 21.0515 70 29.75 70Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">
                        Budget
                      </p>
                    </div>{' '}
                    <div
                      className="flex flex-col items-center bg-gray-100 hover:shadow cursor-pointer py-10 px-14 md:mt-0 mt-4 focus:bg-slate-400"
                      onClick={() => {
                        setQuoteInfo({
                          ...quoteInfo,
                          geyserType: 'energy-saving',
                        });
                      }}
                    >
                      <svg
                        width={84}
                        height={84}
                        viewBox="0 0 84 84"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Molecule logo"
                      >
                        <path
                          d="M44.8455 58.779L64.75 64.75M19.25 19.25L25.221 39.1475L19.25 19.25Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40.8906 43.1095L64.7501 19.25"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.25 24.5C22.1495 24.5 24.5 22.1495 24.5 19.25C24.5 16.3505 22.1495 14 19.25 14C16.3505 14 14 16.3505 14 19.25C14 22.1495 16.3505 24.5 19.25 24.5Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M64.75 24.5C67.6495 24.5 70 22.1495 70 19.25C70 16.3505 67.6495 14 64.75 14C61.8505 14 59.5 16.3505 59.5 19.25C59.5 22.1495 61.8505 24.5 64.75 24.5Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M64.75 70C67.6495 70 70 67.6495 70 64.75C70 61.8505 67.6495 59.5 64.75 59.5C61.8505 59.5 59.5 61.8505 59.5 64.75C59.5 67.6495 61.8505 70 64.75 70Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29.75 70C38.4485 70 45.5 62.9485 45.5 54.25C45.5 45.5515 38.4485 38.5 29.75 38.5C21.0515 38.5 14 45.5515 14 54.25C14 62.9485 21.0515 70 29.75 70Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">
                        Energy Saving
                      </p>
                    </div>{' '}
                    <div
                      className="flex flex-col items-center bg-gray-100 hover:shadow cursor-pointer py-10 px-14 md:mt-0 mt-4 focus:bg-slate-400"
                      onClick={() => {
                        setQuoteInfo({
                          ...quoteInfo,
                          geyserType: 'comfort',
                        });
                      }}
                    >
                      <svg
                        width={84}
                        height={84}
                        viewBox="0 0 84 84"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Molecule logo"
                      >
                        <path
                          d="M44.8455 58.779L64.75 64.75M19.25 19.25L25.221 39.1475L19.25 19.25Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40.8906 43.1095L64.7501 19.25"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.25 24.5C22.1495 24.5 24.5 22.1495 24.5 19.25C24.5 16.3505 22.1495 14 19.25 14C16.3505 14 14 16.3505 14 19.25C14 22.1495 16.3505 24.5 19.25 24.5Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M64.75 24.5C67.6495 24.5 70 22.1495 70 19.25C70 16.3505 67.6495 14 64.75 14C61.8505 14 59.5 16.3505 59.5 19.25C59.5 22.1495 61.8505 24.5 64.75 24.5Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M64.75 70C67.6495 70 70 67.6495 70 64.75C70 61.8505 67.6495 59.5 64.75 59.5C61.8505 59.5 59.5 61.8505 59.5 64.75C59.5 67.6495 61.8505 70 64.75 70Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29.75 70C38.4485 70 45.5 62.9485 45.5 54.25C45.5 45.5515 38.4485 38.5 29.75 38.5C21.0515 38.5 14 45.5515 14 54.25C14 62.9485 21.0515 70 29.75 70Z"
                          stroke="#4B5563"
                          strokeWidth="5.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-xl font-medium leading-5 text-gray-800 mt-10 text-center">
                        Comfort
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full py-4 sm:px-8 px-5 bg-gray-100  flex justify-end">
                <button
                  disabled={false}
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
export default InstallationType;
