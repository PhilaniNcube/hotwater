/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function index() {
  return (
    <div>
      <div className="mx-auto container md:py-12 py-9">
        <div className="relative rounded-md">
          <img
            src="/images/installation.jpg"
            alt="Geyser Installation"
            className="w-full h-full rounded-md  object-right-top object-cover absolute sm:block hidden"
          />
          <img
            src="/images/geyser.jpeg"
            alt="geyser"
            className="w-full h-full rounded-md absolute object-right-top object-cover sm:hidden"
          />
          <div className="text-xl relative bg-gradient-to-r from-gray-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                Safe and reliable installation by accredited professionals
              </h1>
              <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                Safety comes first! We work with our network of independent
                installers. All installers are certified and registered with the
                LPGas Association of South Africa. For safety and quality
                purposes of the installation work performed every installation
                comes with a CoC (Certificate of Compliance) to guarantee your
                safety!
              </p>
            </div>

            <div>
              <img
                src="/images/lpgas.png"
                alt="logo"
                className="h-16 object-cover"
              />
            </div>

            <div className="md:mt-12 mt-20">
              <Link href="/quote/start" passHref>
                <button className="bg-gray-50 text-slate-800 px-6 shadow-md shadow-gray-600 hover:shadow  justify-center text-center font-bold flex space-x-2 py-2  items-center mt-6 rounded-full uppercase">
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
          </div>
        </div>
      </div>
    </div>
  );
}
