/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { savings, start } from '../utils/gtm';

export default function MyApp() {
  return (
    <div>
      <Head>
        <title>Hotwater24 | Our Approach </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater"
        />
      </Head>
      <div className="py-12 2xl:px-20 px-6 max-w-6xl mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="xl:w-6/12 md:w-1/2 xl:pr-8 md:pr-4">
            <h1
              role="heading"
              className="lg:text-5xl text-3xl font-bold leading-tight text-gray-800"
            >
              Over 40 years of experience and knowledge
            </h1>
            <p
              role="contentinfo"
              className="mt-4 text-base leading-6 text-gray-600"
            >
              With over 40years of experience in the Dutch gas installation
              business, we understand your needs. Either when it is a need for
              comfort (on demand hot water 24/7 for your family) or a need out
              of necessity (tired of load shedding, cold water and high energy
              bills from Eskom) and want to become “off-the-grid” and
              independent from Eskom and save money on your energy bill, then
              heating up your water with a gas heating solution is the answer!
            </p>
            <p
              role="contentinfo"
              className="mt-4 text-base leading-6 text-gray-600"
            >
              Please click on the button below to check out your potential
              monthly saving on your energy bill!
            </p>
            <Link href="/savings" passHref>
              <button
                onClick={savings}
                role="button"
                aria-label="explore more"
                className="sm:w-auto w-full mt-10 text-base font-medium leading-none text-white bg-sky-700 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-sky-700 hover:bg-sky-600 focus:outline-none"
              >
                Potential Savings
              </button>
            </Link>
          </div>
          <div className="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
            <Image
              width={1920}
              height={1280}
              src="/images/sink.jpg"
              alt="woman working"
              className="md:w-auto w-full"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:mt-16 mt-8 gap-6 items-start justify-between">
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-sky-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                1
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Off The Grid Solutions
              </h2>
            </div>
            <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
              We can even offer you a “total off-the-grid” solution. Through
              combining gas (for cooking and heating water) and solar (plugs,
              lights, modem, fridge, etc..) we can prepare your property to
              become total off-the-grid without any dependency from Eskom.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-sky-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                2
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Full Service
              </h2>
            </div>
            <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
              We can offer you the full service through our platform of
              independent and certified installers who daily ensure reliable and
              safe installation.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-sky-700 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center">
                3
              </div>
              <h2 className="ml-4 text-base font-semibold leading-4 text-gray-800">
                Financing
              </h2>
            </div>
            <p className="sm:w-72 w-full text-base mt-5 leading-6 text-gray-600">
              Please contact us if you would like to receive more information as
              there are several options we can recommend not only on the product
              & service, but also on possible financing.
            </p>
          </div>
        </div>

        <Link href="/quote/start" passHref>
          <button
            onClick={start}
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 my-8 rounded-full shadow-gray-700 shadow-lg hover:shadow-sm"
          >
            Find Your Fit
          </button>
        </Link>
      </div>
    </div>
  );
}
