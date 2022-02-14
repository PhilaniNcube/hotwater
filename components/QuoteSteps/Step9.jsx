/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

const Step9 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const [checked, setChecked] = useState(quoteInfo.completeSolution);

  // rainShower: 0,
  // kitchenTap: 0,
  // bathtub: 0,
  // sink: 0,
  // dishwasher: 0,
  // flowRate: 0,

  const toggleSolution = () => {
    setChecked(!checked);
    setQuoteInfo({
      ...quoteInfo,
      completeSolution: checked,
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-16 lg:my-8 px-6 lg:px-12">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Personal Contact Information
      </h1>

      <p className="py-1 text-center">
        Please fill this in to complete the questionnaire so we can get in touch
        with you with the recommended solution for your home.
      </p>

      <div className="py-8 px-6 lg:px-16 max-w-5xl mx-auto shadow-lg rounded bg-gray-200 h-1/2 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="bg-gray-200 py-1 px-4 border-b-2 border-slate-800"
              value={quoteInfo.firstName}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  firstName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0 w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="bg-gray-200 py-1 px-4 border-b-2 border-slate-800"
              value={quoteInfo.lastName}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  lastName: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-gray-200 py-1 px-4 border-b-2 border-slate-800"
              value={quoteInfo.email}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col mt-3 md:mt-0 w-full md:w-1/2">
            <label className="text-md font-bold" htmlFor="telephone">
              Telephone/Cellphone
            </label>
            <input
              type="tel"
              name="telephone"
              className="bg-gray-200 py-1 px-4 border-b-2 border-slate-800"
              value={quoteInfo.telephoneNumber}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  telephoneNumber: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full">
            <label className="text-md font-bold" htmlFor="streetAddress">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress"
              className="bg-gray-200 py-1 px-4 border-b-2 border-slate-800"
              value={quoteInfo.streetAddress}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  streetAddress: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex space-x-3">
          <div
            className="h-10 w-10 border-2 border-gray-500 rounded relative"
            onClick={toggleSolution}
          >
            {quoteInfo.completeSolution && (
              <img src="/images/icons/check.svg" alt="" className="" />
            )}
          </div>
          <p className="ml-3 text-md w-3/4">
            Do you wish to receive some extra information from us regarding a
            total off-the-grid solution (gas for cooking and heating up water
            and solar for electricity)?
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 my-3">
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
          Save
        </button>
      </div>
    </div>
  );
};

export default Step9;
