import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Confirm({
  quoteInfo,
  nextPage,
  prevPage,
  page,
  setQuoteInfo,
}) {
  return (
    <div className="max-w-6xl mx-auto my-16 lg:my-8 px-6 lg:px-12">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        You are Done
      </h1>

      <p className="py-1 text-center">
        Thanks for taking the time to complete the questionnaire
      </p>
      <div className="py-8 px-6 lg:px-16 max-w-5xl mx-auto shadow-lg rounded bg-gray-200  md:h-1/2 mt-6 flex flex-col items-center">
        <div className="flex flex-col justify-center w-5/6 lg:w-1/2">
          <h2 className="text-4xl text-center font-light uppercase">
            Thank <span className="font-bold">You!</span>
          </h2>
          <p className="text-md text-medium py-2 text-center">
            We have taken note of your interest and we will be in touch shortly
            with a quotation based on your answers.
          </p>
        </div>
      </div>
    </div>
  );
}
