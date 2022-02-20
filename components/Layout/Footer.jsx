/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between space-x-4">
        <div className="">
          <div className="flex items-center text-white">
            <img src="/images/logo-01.svg" alt="" className="h-12 w-12" />
            <h3 className="text-2xl uppercase tracking-widest">
              HOTWATER<span className="font-bold">24</span>
            </h3>
          </div>
          <div className="text-gray-400 mt-4">
            <p className="text-sm">Address Line 1</p>
            <p className="text-sm">Address Line 2</p>
            <p className="text-sm">Suburb</p>
            <p className="text-sm">City</p>
          </div>
          <div className="mt-2 text-gray-400">
            <p className="text-sm">Tel: +12 34 567 8910</p>
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
        <div className="flex flex-col justify-center">
          <div className="text-gray-400 mt-4 flex flex-col">
            <p className="text-sm">Stay Connected</p>
            <form className="flex flex-col justify-center items-center space-y-2">
              <input
                className="px-4 py-2 mt-2 rounded-full bg-white text-gray-500 w-1/3 lg:w-full min-w-fit"
                type="text"
                placeholder="email"
              />
              <button className="py-2 px-10 text-center text-white bg-sky-500 hover:bg-sky-600 rounded-full min-w-fit w-1/3 lg:w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
