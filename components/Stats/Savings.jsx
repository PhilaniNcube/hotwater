import Link from 'next/link';
import React, { useState } from 'react';
import { start } from '../../utils/gtm';

function Savings() {
  const [bill, setBill] = useState(100);

  let savings = bill * 0.2;

  let year = savings * 12;

  return (
    <div className="container mx-auto py-4">
      <div className="bg-gray-100 xl:px-20 lg:px-20 md:px-12 pt-2 pb-8 sm:pb-0">
        <h1 className="text-center xl:text-3xl text-2xl font-extrabold text-gray-800 w-5/6 mx-auto">
          Calculate Your Potential Savings From Switching To Gas
        </h1>
        <div className="py-2 px-4 max-w-6xl mx-auto bg-slate-50 shadow-md rounded-md my-4">
          <div className="relative pt-1 px-4">
            <label htmlFor="bill" className="text-xl text-gray-700">
              Monthly Electricity Bill :{' '}
              <span className="text-2xl font-bold text-red-600">R{bill}</span>
            </label>
            <input
              type="range"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full h-8 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
              min={100}
              step={50}
              max={20000}
              id="bill"
            />
          </div>
        </div>
        <p className="text-xl text-center text-gray-600 w-5/6 mx-auto pt-5 pb-20">
          You can save up to 20% on your monthly electricity bill by switching
          to a gas geyser system.
        </p>
      </div>

      <div className="xl:flex xl:w-9/12 lg:flex md:flex justify-around bg-white w-full flex-wrap shadow-lg mx-auto -mt-16 rounded">
        <div className="w-full xl:w-3/12 lg:w-3/12 md:w-3/12 bg-white py-4 ">
          <p className="text-lg lg:text-2xl text-gray-500 text-center">
            Monthly Saving*
          </p>
          <p className="text-5xl font-bold text-center text-sky-700 pt-1">
            R{savings.toFixed(2)}*
          </p>
        </div>
        <div className="w-full xl:w-3/12 lg:w-3/12 md:w-3/12 bg-white py-4 ">
          <p className="text-lg lg:text-2xl text-gray-500 text-center">
            Savings/Year*
          </p>
          <p className="text-5xl font-bold text-center text-green-500 pt-1">
            R{year.toFixed(2)}*
          </p>
        </div>
      </div>

      <div className="max-w-[500px] mt-6">
        <p className="text-[9px] text text-slate-700">
          *The calculator on this website produces mere estimates which are
          based on information provided and flactuating factors and may
          therefore not reflect the probable savings. The results and savings
          shown of the calculations are not a promise or guarantee of a
          customer’s savings. 
        </p>
      </div>

      <div className="flex justify-center items-center mt-4 mb-12">
        <Link href="/quote/start" passHref>
          <button
            onClick={start}
            className="bg-gray-800 text-white flex space-x-2 py-2 px-4 mb-8 shadow-gray-600 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit"
          >
            Choose your geyser
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
      </div>
    </div>
  );
}

export default Savings;
