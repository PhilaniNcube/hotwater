import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div
      className="max-w-6xl mx-auto bg-cover bg-center bg-no-repeat px-4 lg:px-16 py-6"
      style={{ backgroundImage: 'url(/images/geyser.jpeg)' }}
    >
      <h1 className="text-2xl lg:text-4xl font-sans font-bold mb-3">
        Start saving up to <span className="text-6xl">30%</span> <br />
        on your water heating
      </h1>
      <p className="text-md lg:text-lg  font-medium leading-3">
        Through the power of gas geyser <br />
        heating solutions for your home
      </p>
      <Link href="/quote/start" passHref>
        <button className="bg-gray-800 text-white flex space-x-2 py-1 px-4 items-center mt-4 rounded-full">
          Find Your Fit
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 pl-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </button>
      </Link>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <div className="p-3 bg-gray-500 bg-opacity-50 h-56 flex flex-col items-center justify-around">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-md text-white text-center font-medium">
            Got Water Around The Clock
          </p>
          <p className="text-sm text-center text-white">
            Fugiandam, ulluptas dit late et volliquas et, quae vendelent quiate
            sunt labore pratur am dolendunda volorep repudae qui rem.
          </p>
        </div>
        <div className="p-3 bg-gray-500 bg-opacity-50 h-56 flex flex-col items-center justify-around">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p className="text-md text-white text-center font-medium">
            Guaranteed Safety
          </p>
          <p className="text-sm text-center text-white">
            Fugiandam, ulluptas dit late et volliquas et, quae vendelent quiate
            sunt labore pratur am dolendunda volorep repudae qui rem.
          </p>
        </div>
        <div className="p-3 bg-gray-500 bg-opacity-50 h-56 flex flex-col items-center justify-around">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-md text-white text-center font-medium">
            Save On Your Electricty Bill
          </p>
          <p className="text-sm text-center text-white">
            Fugiandam, ulluptas dit late et volliquas et, quae vendelent quiate
            sunt labore pratur am dolendunda volorep repudae qui rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
