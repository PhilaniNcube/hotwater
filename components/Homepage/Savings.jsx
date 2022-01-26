/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Savings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-800">
      <div className="p-8 flex flex-col justify-around">
        <h2 className="text-white text-xl font-bold md:text-2xl lg:text-4xl">
          Gas Geyser Benefits
        </h2>
        <div className="bg-gray-900 p-4 mt-2 rounded-sm shadow-md text-white">
          <ul>
            <li className="text-md font-light pb-2">
              Cheaper to run vs normal electric geysers
            </li>
            <li className="text-md font-light pb-2">
              Get the benefit of hot water even during Eskom blackouts
            </li>
            <li className="text-md font-light pb-2">
              Get instant hot water, no more cold showers.
            </li>
            <li className="text-md font-light pb-2">
              Perfect for Off Grid living
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-col md:flex-row">
          <Link href="/quote" passHref>
            <button className="my-2 bg-gray-50 transition duration-150 ease-in-out hover:bg-gray-400 text-gray-900 px-16 py-4 text-xl">
              Get A Quote
            </button>
          </Link>
          <button className="md:mx-8 my-2 bg-gray-50 transition duration-150 ease-in-out hover:bg-gray-400 text-gray-900 px-16 py-4 text-xl">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-white text-gray-800">
        <img
          className="w-full object-cover"
          alt="background"
          src="/images/bathtub.jpg"
        />
      </div>
    </div>
  );
};

export default Savings;
