/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Banner7 = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="w-full flex">
        <div className="w-full flex justify-center item-center flex-col">
          <div className="relative flex items-start justify-center">
            <img
              className="hidden md:block w-full"
              src="/images/installation-2.jpg"
              alt="banner"
            />
            <img
              className="w-full md:hidden"
              src="/images/geyser.jpeg"
              alt="banner-short"
            />
          </div>
          <div className="absolute flex justify-start items-start flex-col px-4 md:pl-6 xl:pl-12">
            <div>
              <h1 className="xl:text-4xl text-3xl font-bold tracking-wider leading-9 md:leading-4 text-gray-800 pr-6 md:pr-0">
                Our selection of cost-effective and efficient gas geysers.
              </h1>
            </div>
            <div className="mt-2">
              {/**
                 <p className="text-base tracking-wider xl:text-xl leading-normal xl:leading-7 pr-6 md:pr-0 text-gray-800 w-11/12 md:w-3/5">
                Cost-effective and efficient gas water heating solutions for
                your household.
              </p>
            */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner7;
