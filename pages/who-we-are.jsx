import Head from 'next/head';
import React, { Fragment } from 'react';
import Link from 'next/link';
import { start } from '../utils/gtm';

const WhoWeAre = () => {
  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Who We Are</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater"
        />
        <link rel="canonical" href="https://www.hotwater24.com/who-we-are" />
      </Head>
      <header
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hot-shower.jpg)' }}
      >
        <div className="max-w-6xl mx-auto my-auto py-10 px-4 lg:px-0">
          <h1 className="text-white font-light text-3xl lg:text-5xl">
            About <span className="font-bold">Us</span>
          </h1>

          <p className="text-sm max-w-[55ch] text-white pb-2">
            We are Hotwater24, the specialist to assist and advise you on
            the most cost-effective and efficient gas water heating solution for
            your household. We do not only offer the best geysers, we also offer
            you the installation and maintenance service.
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            Basically a one-stop-shop for all your water heating solutions!
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            We can offer you the full service through our platform of
            independent and certified installers who ensure reliable and safe
            installations every day.
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            With over 40years of experience in the Dutch gas installation
            business, we understand your need and can therefore help you make
            the best choice! And all that for a competitive price!
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            By clicking on the button below we instantly recommend you with the
            best gas water heating solution for your home
          </p>

          <Link href="/quote/start" passHref>
            <button
              onClick={start}
              className="bg-gray-800 text-white flex space-x-2 py-2 px-4 shadow-gray-600 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit uppercase"
            >
              Choose Your Geyser
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
      </header>
    </Fragment>
  );
};

export default WhoWeAre;
