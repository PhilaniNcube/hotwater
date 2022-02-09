/* eslint-disable @next/next/no-img-element */
import React, { useState, Fragment } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState({
    name: 'Philani',
    email: 'ncbphi001@gmail.com',
  });

  return (
    <nav className="">
      {/*Desktop Nav */}
      <div className="py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/*Logo */}
          <Link href="/" passHref>
            <div className="flex space-x-2 items-center cursor-pointer">
              <img
                className="h-12 object-cover"
                src="/images/logo-01.svg"
                alt="hotwater24"
                aria-label="Logo"
              />
              <span className="font-bebas text-4xl tracking-widest font-thin">
                Hotwater <span className="font-bold">24</span>
              </span>
            </div>
          </Link>
          {/*Search Input*/}
          <div className="flex flex-col flex-1 px-16">
            <div className="relative w-full">
              <div className="absolute text-gray-600  flex items-center pl-3 h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                id="search"
                className="text-gray-600 rounded-full w-full bg-gray-200  focus:outline-none focus:border focus:border-gray-700 font-normal pr-20 sm:pr-32 h-10 flex items-center pl-10 text-sm border-gray-300 border shadow"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/*Quote Button */}
          <div>
            <button className="bg-sky-600 text-white flex items-center px-8 py-2 rounded-full font-bold">
              Get In Touch{' '}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto py-4 flex items-center justify-between">
          <nav className="flex items-center">
            <Link href="/who-we-are">
              <a className="text-md focus:text-sky-600 pr-6">Who We Are</a>
            </Link>
            <Link href="/why-us">
              <a className="text-md focus:text-sky-600 px-6">Why Us</a>
            </Link>
            <Link href="/our-approach">
              <a className="text-md focus:text-sky-600 px-6">Our Approach</a>
            </Link>
            <Link href="/catalogue">
              <a className="text-md focus:text-sky-600 px-6">Our Catalogue</a>
            </Link>
          </nav>
          <div>
            {user ? (
              <Link href="/profile" passHref>
                <div className="flex items-center text-red-600 cursor-pointer">
                  <p>{user.name}</p>
                  <span className="pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white bg-red-600 rounded-full p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex space-x-2 items-center">
                <Link href="/signin">
                  <a className="text-md font-bold">Sign In</a>
                </Link>
                <Link href="/register">
                  <a className="text-md font-bold">Register</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
