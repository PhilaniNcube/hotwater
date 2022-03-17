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
      <div className="py-8 px-6 lg:px-16 max-w-5xl mx-auto shadow-lg rounded md:h-1/2 mt-6 flex flex-col items-center">
        <div className="flex flex-col justify-center w-5/6 lg:w-1/2">
          <h2 className="text-4xl text-center font-light uppercase">
            Thank <span className="font-bold">You!</span>
          </h2>
          <p className="text-md text-medium py-2 text-center">
            We have taken note of your interest and we will be in touch shortly
            with a quotation based on your answers.
          </p>
          <p className="text-md text-medium py-2 text-center">
            You can also visit our shop to buy one of our recommended geysers.
          </p>

          <Link href="/catalogue" passHref>
            <button className="text-4xl text-white px-8 py-2 bg-gray-800 text-center font-light uppercase">
              Buy A Geyser
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
