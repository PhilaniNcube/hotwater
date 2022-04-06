/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useUser } from '../../Context/AuthContext';
import { supabase } from '../../utils/supabase';

const Step10 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  return (
    <form
      onSubmit={nextPage}
      className="max-w-6xl mx-auto my-16 lg:my-8 px-6 lg:px-12"
    >
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
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
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
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700"
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
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700"
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
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
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
        <div className="flex flex-col w-full md:w-3/4">
          <label className="text-md font-bold" htmlFor="streetAddress">
            Street Address
          </label>
          <input
            type="text"
            name="streetAddress"
            required
            className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
            value={quoteInfo.streetAddress}
            onChange={(e) =>
              setQuoteInfo({
                ...quoteInfo,
                streetAddress: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-24 my-4">
          <div className="flex flex-col w-full">
            <label className="text-md font-bold" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.city}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  city: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-md font-bold" htmlFor="postalCode">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              required
              className="rounded-md border border-gray-300 pl-4 py-2 text-base text-gray-600 focus:outline-none focus:border-gray-700 "
              value={quoteInfo.postalCode}
              onChange={(e) =>
                setQuoteInfo({
                  ...quoteInfo,
                  postalCode: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4 mb-12">
        <div className="flex items-center justify-center space-x-6 my-3">
          {quoteInfo.firstName !== '' ||
          quoteInfo.lastName !== '' ||
          quoteInfo.email !== '' ||
          quoteInfo.telephoneNumber !== '' ||
          quoteInfo.streetAddress !== '' ||
          quoteInfo.city !== '' ||
          quoteInfo.postalCode !== '' ? (
            <Fragment>
              {' '}
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
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
              >
                Continue
              </button>
            </Fragment>
          ) : (
            <Fragment>
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
              <p className="text-md text-sky-600 font-bold text-center">
                Please answer the questions
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </form>
  );
};

export default Step10;
