/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function CatalogueHero() {
  return (
    <>
      <div className="bg-yellow flex flex-col items-center w-full justify-between py-24 px-4">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-semibold leading-9 text-gray-800 text-center">
          Recommended Geysers
        </h1>
        <p className="text-base font-medium leading-4 text-gray-800 mt-4 text-center">
          Select one one of our recommended geysers based on your answers
        </p>
        <Link href="/" passHref>
          <button className="space-x-3 mt-8 hover:bg-gray-700 flex items-center justify-center h-full px-4 py-3.5 bg-gray-800 rounded">
            <p className="text-base font-medium leading-none text-white">
              Home
            </p>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.84467 2.96967C8.13756 2.67678 8.61244 2.67678 8.90533 2.96967L13.4053 7.46967C13.6982 7.76256 13.6982 8.23744 13.4053 8.53033L8.90533 13.0303C8.61244 13.3232 8.13756 13.3232 7.84467 13.0303C7.55178 12.7374 7.55178 12.2626 7.84467 11.9697L11.8143 8L7.84467 4.03033C7.55178 3.73744 7.55178 3.26256 7.84467 2.96967Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.375 8C2.375 7.58579 2.71079 7.25 3.125 7.25H12.25C12.6642 7.25 13 7.58579 13 8C13 8.41421 12.6642 8.75 12.25 8.75H3.125C2.71079 8.75 2.375 8.41421 2.375 8Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>

      <style>
        {` .bg-yellow{
            background:  linear-gradient(177.82deg, rgba(252, 211, 77, 0.7) -11.47%, rgba(252, 211, 77, 0) 100.36%);
        }`}
      </style>
    </>
  );
}
