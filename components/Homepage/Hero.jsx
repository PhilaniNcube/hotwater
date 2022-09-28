import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 z-[-1]">
        <div className="min-h-[70vh] isolate bg-gray-700 overflow-hidden">
          <Image
            src="/images/shower-2.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
            className="z-[-1] h-[100%]"
          />
        </div>
      </div>
      <div className="max-w-7xl flex flex-col space-y-3 justify-center aspect-video min-h-[70vh] mx-auto bg-cover z-20 bg-center bg-no-repeat px-4 lg:px-16 py-12">
        <h1 className="text-2xl lg:text-4xl font-sans font-bold mb-3 text-white">
          Save up to <span className="lg:text-6xl ">20%</span> <br />
          on your monthly electricity bill
        </h1>
        <p className="text-md lg:text-xl mb-4 font-medium leading-3 text-white">
          Say goodbye to soaring electricity prices
          <br /> and enjoy the comfort of a gas geyser <br />
          installation for your home.
        </p>

        <Link href="/quote/start" passHref>
          <button className="bg-gray-50 text-slate-800 flex justify-center items-center max-w-[280px] text-center font-bold py-2 text-xs md:text-md lg:text-base mt-6 rounded-full uppercase">
          <span>
          Choose Your Gas Geyser
          </span>
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
};

export default Hero;
