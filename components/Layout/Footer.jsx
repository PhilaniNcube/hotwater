/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Whatsapp from '../Whatsapp';

const Footer = () => {
  return (
    <div className="bg-gray-800 px-4 md:px-0 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between space-x-4">
        <div className="w-full">
          <div className="text-gray-400 mt-4">
            <p className="text-sm">9 Kramer Road</p>
            <p className="text-sm">Kramerville</p>
            <p className="text-sm">Sandton</p>
            <p className="text-sm">Johannesburg</p>
          </div>
          <div className="mt-2 text-gray-400">
            <p className="text-sm">Email: info@hotwater24.com</p>
            <p className="text-sm">Tel: +27793414075</p>
            <div className="mt-2 flex flex-col space-y-3 cursor-pointer">
              <Whatsapp />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start w-full">
          <div className="text-gray-400 mt-4 flex flex-col">
            <Link href="/">
              <a className="text-sm">Home</a>
            </Link>
            <Link href="/who-we-are">
              <a className="text-sm">Who We Are</a>
            </Link>
            <Link href="/why-us">
              <a className="text-sm">Why Us</a>
            </Link>
            <Link href="/our-promise">
              <a className="text-sm">Our Promise</a>
            </Link>
            <Link href="/our-approach">
              <a className="text-sm">Our Approach</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm">Contact us</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start w-full items-start"></div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400 mt-4 flex flex-col justify-start items-end">
            <img
              className="w-5/6 object-cover"
              src="/images/footer.png"
              alt="paygate logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
