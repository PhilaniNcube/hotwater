/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-gray-800 px-4 md:px-0 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between space-x-4">
        <div className="">
          <div className="flex items-center text-white">
            <img src="/images/logo-01.svg" alt="" className="h-12 w-12" />
            <h3 className="text-2xl uppercase tracking-widest">
              HOTWATER<span className="font-bold">24</span>
            </h3>
          </div>
          <div className="text-gray-400 mt-4">
            <p className="text-sm">9 Kramer Road</p>
            <p className="text-sm">Kramerville</p>
            <p className="text-sm">Sandton</p>
            <p className="text-sm">Johannesburg</p>
          </div>
          <div className="mt-2 text-gray-400">
            <p className="text-sm">Tel: +27 (0)79 341 4075</p>
            <p className="text-sm">Email: info@hotwater24.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
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
        <div className="flex flex-col justify-center">
          <div className="text-gray-400 mt-4 flex flex-col">
            <Link href="/profile">
              <a className="text-sm">My Profile</a>
            </Link>
            <Link href="/account/orders">
              <a className="text-sm">My Orders</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-400 mt-4 flex flex-col justify-start items-end">
            <img
              className="w-5/6 md:w-3/6 object-cover"
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
