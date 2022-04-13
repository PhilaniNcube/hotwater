import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 z-[-1]">
        <div className="min-h-[70vh] isolate bg-gray-700 overflow-hidden">
          <Image
            src="/images/shower-2.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={75}
            className="z-[-1] h-[100%]"
          />
        </div>
      </div>
      <div className="max-w-7xl flex flex-col space-y-3 justify-center aspect-video min-h-[70vh] mx-auto bg-cover z-20 bg-center bg-no-repeat px-4 lg:px-16 py-12">
        <h1 className="text-2xl lg:text-4xl font-sans font-bold mb-3 text-white">
          Save up to <span className="lg:text-6xl ">20%</span> <br />
          on your monthly electricity bill.
        </h1>
        <p className="text-md lg:text-xl mb-4 font-medium leading-3 text-white">
          Say goodbye to soaring electricity prices
          <br /> and enjoy the comfort of a gas geyser <br />
          installation for your home.
        </p>
        <Link href="/quote/start" passHref>
          <button className="bg-gray-50 text-slate-800 max-w-[200px] text-center font-bold flex space-x-2 py-2 px-4 items-center mt-6 rounded-full">
            Get Your Geyser
            <span className="text-lg ml-2 font-bold">&rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
