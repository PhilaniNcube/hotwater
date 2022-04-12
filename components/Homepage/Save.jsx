/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const Save = () => {
  return (
    <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
      <div className="flex justify-between bg-gray-50 items-stretch flex-row">
        <div className="flex items-center bg-sky-900 justify-center">
          <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">
            Save 20%
          </p>
        </div>
        <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
          <div>
            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-sky-900">
              Save Money By Switching To Gas
            </p>
          </div>
          <div className="lg:my-4 my-2">
            <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
              Calculations have shown that you could save up to 20% on your
              monthly electricity bill
            </p>

            <Link href="/savings"><a className="px-6 py-2 text-white bg-slate-800 text-center text-base">Calculate Your Savings</a></Link>
          </div>
        </div>
        <div className="hidden md:block h-44 md:h-60 xl:h-72">
          <img
            className="hidden h-full xl:block"
            src="/images/kitchen-sink.jpg"
            alt="Kitchen Sink"
          />
          <img
            className="xl:hidden h-full"
            src="/images/kitchen-sink.jpg"
            alt="Kitchen Sink"
          />
        </div>
      </div>
      <div className="md:hidden mt-6 w-full">
        <img
          src="/images/kitchen-sink.jpg"
          alt="Kitchen Sink"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Save;
