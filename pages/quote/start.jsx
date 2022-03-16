/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { start } from '../../utils/gtm';

const Start = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Head>
        <title>Hotwater24 | Quote</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Submit a quote request." />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater"
        />
      </Head>
      <div className="pt-4">
        <h1 className="font-sans text-2xl text-center font-semibold text-gray-800">
          Let us help you find your fit.
        </h1>

        <p className="text-lg text-center px-8 lg:px-60">
          Answer a few questions and we will instantly give you an expert
          recommendation for a suitable geyser for your home
        </p>

        <div className="flex flex-col md:flex-row items-center py-8 justify-between">
          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <img
              className="h-16 w-16"
              alt=""
              src="/images/icons/clipboard.svg"
            />
            <p className="text-sm py-8 text-center px-3">
              Answer a few questions
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500 mt-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <img
              className="h-16 w-16"
              alt=""
              src="/images/icons/document.svg"
            />
            <p className="text-sm py-8 text-center px-3">
              We analyze your answers
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500 mt-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <img className="h-16 w-16" alt="" src="/images/icons/mail.svg" />
            <p className="text-sm py-8 text-center px-3">Our Recommendation</p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <Link href="/quote" passHref>
            <button
              onClick={start}
              className="bg-sky-500 hover:bg-sky-700 text-center text-white text-2xl font-medium rounded-full py-3 px-8 shadow-sky-400 shadow-md hover:shadow"
            >
              Lets get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
