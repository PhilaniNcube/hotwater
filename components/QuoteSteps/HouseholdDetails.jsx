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
                  <div className="h-8 flex items-center justify-center border-indigo-700  font-bold  w-8 rounded-full border shadow text-indigo-700">
                    2
                  </div>
                  <p className="text-gray-800 text-lg font-normal ml-4">
                    Selecter Geyser Type
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
                    Please answer some questions about the building you want to
                    install the geyser in.
                  </p>
                  <div className="ml-2 cursor-pointer text-gray-600 "></div>
                </div>
              </div>

              <div className="w-11/12 mx-auto mb-10">
                <div className="w-full xl:w-9/12 mx-auto xl:mx-0 flex flex-col md:flex-row items-center md:justify-between">
                  <form className="container mx-auto bg-white shadow rounded">
                    <div>
                      <div className="xl:w-full border-b border-gray-300  py-5">
                        <div className="flex items-center w-11/12 mx-auto">
                          <p className="text-lg text-gray-800  font-bold">
                            Building Information
                          </p>
                          <div className="ml-2 cursor-pointer text-gray-600 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={16}
                              height={16}
                            >
                              <path
                                className="heroicon-ui"
                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-11/12 mx-auto">
                        <div className="container mx-auto">
                          <div className="my-8 mx-auto xl:w-full xl:mx-0">
                            <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label
                                  htmlFor="typeOfHouse"
                                  className="pb-2 text-sm font-bold text-gray-800 "
                                >
                                  Type Of House
                                </label>
                                <div className="border border-gray-300  shadow-sm rounded flex relative">
                                  <select
                                    type="text"
                                    name="typeOfHouse"
                                    required
                                    id="typeOfHouse"
                                    value={quoteInfo.typeOfHouse}
                                    onChange={(e) => {
                                      setQuoteInfo({
                                        ...quoteInfo,
                                        typeOfHouse: e.target.value,
                                      });
                                    }}
                                    className="bg-white appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800  rounded"
                                  >
                                    <option value="flat">Flat</option>
                                    <option value="free-standing">
                                      Free standing
                                    </option>
                                    <option value="other">Other</option>
                                  </select>
                                  <div
                                    className="px-4 flex items-center border-l border-gray-300  flex-col justify-center text-gray-500
                                       absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                  >
                                    <svg
                                      tabIndex={0}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-chevron-up"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                    <svg
                                      tabIndex={0}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-chevron-down"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label
                                  htmlFor="occupants"
                                  className="pb-2 text-sm font-bold text-gray-800 "
                                >
                                  Number Occupants
                                </label>
                                <input
                                  type="number"
                                  id="occupants"
                                  name="occupants"
                                  value={quoteInfo.occupants}
                                  onChange={(e) => {
                                    setQuoteInfo({
                                      ...quoteInfo,
                                      occupants: +e.target.value,
                                    });
                                  }}
                                  required
                                  className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                                />
                              </div>

                              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label
                                  htmlFor="showerType"
                                  className="pb-2 text-sm font-bold text-gray-800 "
                                >
                                  Type Of Shower
                                </label>
                                <div className="border border-gray-300  shadow-sm rounded flex relative">
                                  <select
                                    type="text"
                                    name="showerType"
                                    required
                                    value={quoteInfo.showerType}
                                    onChange={(e) => {
                                      setQuoteInfo({
                                        ...quoteInfo,
                                        showerType: e.target.value,
                                      });
                                    }}
                                    id="showerType"
                                    className="bg-white appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800  rounded"
                                  >
                                    <option value="normal">Normal</option>
                                    <option value="jetpower">Jet Power</option>
                                    <option value="water saving">
                                      Water Saving
                                    </option>
                                  </select>
                                  <div
                                    className="px-4 flex items-center border-l border-gray-300  flex-col justify-center text-gray-500
                                       absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                  >
                                    <svg
                                      tabIndex={0}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-chevron-up"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                    <svg
                                      tabIndex={0}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-chevron-down"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label
                                  htmlFor="bathrooms"
                                  className="pb-2 text-sm font-bold text-gray-800 "
                                >
                                  Number bathrooms and kitchens
                                </label>
                                <input
                                  type="number"
                                  id="bathrooms"
                                  name="bathrooms"
                                  required
                                  value={quoteInfo.bathrooms}
                                  onChange={(e) => {
                                    setQuoteInfo({
                                      ...quoteInfo,
                                      bathrooms: +e.target.value,
                                    });
                                  }}
                                  className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                                />
                              </div>

                              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label
                                  htmlFor="simultaneousUse"
                                  className="pb-2 text-sm font-bold text-gray-800 "
                                >
                                  Will more than one person shower ath the same
                                  time
                                </label>
                                <div className="border border-gray-300  shadow-sm rounded flex relative">
                                  <select
                                    type="checkbox"
                                    name="simultaneousUse"
                                    required
                                    value={quoteInfo.simultaneousUse}
                                    onChange={(e) => {
                                      setQuoteInfo({
                                        ...quoteInfo,
                                        simultaneousUse: e.target.value,
                                      });
                                    }}
                                    id="showerType"
                                    className="bg-white appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800  rounded"
                                  >
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                  </select>
                                  <div
                                    className="px-4 flex items-center border-l border-gray-300  flex-col justify-center text-gray-500
                                       absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                                  >
                                    <svg
                                      tabIndex={0}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-chevron-up"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="6 15 12 9 18 15" />
                                    </svg>
                                    <svg
                                      tabIndex={0}
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon icon-tabler icon-tabler-chevron-down"
                                      width={16}
                                      height={16}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" />
                                      <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label
                                  htmlFor="houseArea"
                                  className="pb-2 text-sm font-bold text-gray-800 "
                                >
                                  Size of the house/building in square meters
                                </label>
                                <input
                                  type="number"
                                  id="houseArea"
                                  name="houseArea"
                                  required
                                  value={quoteInfo.houseArea}
                                  onChange={(e) => {
                                    setQuoteInfo({
                                      ...quoteInfo,
                                      houseArea: +e.target.value,
                                    });
                                  }}
                                  className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
