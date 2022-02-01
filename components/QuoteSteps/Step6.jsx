import React, { useState } from 'react';

const Step6 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);

    setQuoteInfo({
      ...quoteInfo,
      completeSolution: isChecked,
    });

    console.log(quoteInfo.completeSolution);
  };

  return (
    <div className="max-w-6xl mx-auto my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h4 className="text-2xl font-bold leading-tight text-gray-800">
          Personal Info
        </h4>
        <div className="mt-6 md:mt-0">
          <button
            onClick={prevPage}
            className="mr-3 bg-gray-200 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 px-5 py-2 text-sm"
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
        <div className="mt-4">
          <div>
            <div className="xl:w-full border-b border-gray-300"></div>
            <div className="w-11/12 mx-auto">
              <div className="container mx-auto">
                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                  <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="firstName"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={quoteInfo.firstName}
                        onChange={(e) => {
                          setQuoteInfo({
                            ...quoteInfo,
                            firstName: e.target.value,
                          });
                        }}
                        required
                        id="firstName"
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="lastName"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={quoteInfo.lastName}
                        onChange={(e) => {
                          setQuoteInfo({
                            ...quoteInfo,
                            lastName: e.target.value,
                          });
                        }}
                        required
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="email"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute text-gray-600  flex items-center px-4 border-r h-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-mail"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={quoteInfo.email}
                          onChange={(e) => {
                            setQuoteInfo({
                              ...quoteInfo,
                              email: e.target.value,
                            });
                          }}
                          required
                          className="w-full bg-transparent text-gray-800  focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="streetAddress"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={quoteInfo.streetAddress}
                        onChange={(e) => {
                          setQuoteInfo({
                            ...quoteInfo,
                            streetAddress: e.target.value,
                          });
                        }}
                        required
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="city"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={quoteInfo.city}
                        onChange={(e) => {
                          setQuoteInfo({
                            ...quoteInfo,
                            city: e.target.value,
                          });
                        }}
                        required
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                      />
                    </div>
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="telephoneNumber"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Telephone
                    </label>
                    <input
                      type="tel"
                      id="telephoneNumber"
                      name="telephoneNumber"
                      value={quoteInfo.telephoneNumber}
                      onChange={(e) => {
                        setQuoteInfo({
                          ...quoteInfo,
                          telephoneNumber: e.target.value,
                        });
                      }}
                      required
                      className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                    />
                  </div>
                  <div className="py-4 flex items-center">
                    <div className="bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                      <input
                        onChange={handleOnChange}
                        checked={isChecked}
                        type="checkbox"
                        className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                      />
                      <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                        <svg
                          className="icon icon-tabler icon-tabler-check"
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm leading-4 font-normal text-gray-800">
                      Do you wish to receive some extra information from us
                      regarding a total off-the-grid solution (gas for cooking
                      and heating up water and solar for electricity)?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-end rounded-bl rounded-br">
              <button
                className="bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                onClick={nextPage}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
      </style>
    </div>
  );
};

export default Step6;
