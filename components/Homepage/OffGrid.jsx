/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

function OffGrid() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto h-[80vh]">
        <div className="relative flex justify-end h-full">
          <div className="absolute top-[30%] right-6 lg:right-12 bg-gray-700 bg-opacity-40 lg:bg-opacity-100 min-h-[30vh] w-[70vw] lg:w-[40vw] z-40 text-white p-8 shadow-xl">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
              Save Money On Your Electricity Bills Geyser
            </h1>
            <p className="text-base mt-3 font-medium">
              Get instant hot water at any time and save on your monthly bills
            </p>
            <Link href="/quote" passHref>
              <button className="bg-gray-50 px-6 py-2 font-semibold mt-2 text-gray-800 hover:bg-gray-200">
                Get In Touch
              </button>
            </Link>
          </div>
          <div className="w-full h-full z-10">
            <img
              alt="background"
              src="/images/bath.jpg"
              className="h-[80vh] w-full lg:w-[70vw] object-cover self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffGrid;
