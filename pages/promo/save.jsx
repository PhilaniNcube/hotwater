import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IndexPage() {
  return (
    <Fragment>
      <div
        className="mx-auto container mt-0 lg:my-16 my-10 px-4 lg:px-0"
        id="saving"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className=" text-2xl lg:text-6xl leading-normal tracking-wide text-gray-800 text-center">
            Save With Gas
          </h1>
        </div>
        <div className="lg:flex items-center justify-center mt-4 lg:mt-8">
          <div className="lg:w-1/2 h-2/3 -z-10">
            <Image
              width={3543}
              height={2362}
              src="/images/Save.jpg"
              alt="Save"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 lg:mt-0 py-12 px-8 lg:px-12 bg-gray-700 lg:w-2/5 lg:-ml-10 text-white">
            <div className="pb-6 md:leading-6 text-base leading-9">
              SAVE up to 20% of your current monthly electricity bill on hot
              water! Simply switch your geyser from electricity to gas! Take our
              quick savings wizard today to discover how much you can save by
              using a gas geyser.
            </div>
            <Link href="/savings" passHref>
              <button className="font-bold text-base leading-6 bg-gray-50 rounded-full px-6 py-1 text-gray-700">
                Calculate Your Saving
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
