/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { useUser } from '../../Context/AuthContext';
import { useRouter } from 'next/router';
import useCart from '../../hooks/useCart';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const router = useRouter();

  const [query, setQuery] = useState('');

  const { cart } = useCart();

  const { user, signOut } = useUser();

  console.log('Navbar user', user);

  const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/search?query=${query}`);
  };

  const handleSignOut = async () => {
    setShow(false);
    await signOut();
    // setUser(undefined);
  };

  return (
    <Popover>
      {/*Desktop Nav */}
      <div className="py-4">
        <div className="max-w-6xl mx-auto px-2 md:px-0 flex items-center justify-between">
          {/*Logo */}
          <Link href="/" passHref>
            <div className="flex space-x-2 items-center cursor-pointer">
              <img
                className="h-8 md:h-12 object-cover"
                src="/images/hw24-logo.svg"
                alt="hotwater24"
                aria-label="Logo"
              />
            </div>
          </Link>
          {/*Search Input*/}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-col flex-1 px-16"
          >
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="text-gray-600 rounded-full w-full bg-gray-200  focus:outline-none focus:border focus:border-gray-700 font-normal pr-20 sm:pr-32 h-10 flex items-center pl-10 text-sm border-gray-300 border shadow"
                placeholder="Search products..."
              />
            </div>
          </form>

          {/*Quote Button */}
          <div>
            <Link href="/contact" passHref>
              <button className="bg-sky-600 text-white flex items-center px-6 md:px-8 py-2 rounded-full font-bold">
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
            </Link>
          </div>

          {/*Quote Button Ends*/}
        </div>
      </div>
      {/*Top Nav Ends */}

      {/*Bottom Nav Begins */}
      <div className="bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto py-4 px-4 md:px-2 lg:px-0 flex items-center justify-between relative">
          <nav className="hidden md:flex items-center">
            <Link href="/">
              <a className="text-sm md:text-md focus:text-sky-600 pr-6">Home</a>
            </Link>
            <Link href="/who-we-are">
              <a className="text-sm md:text-md focus:text-sky-600 px-6">
                Who We Are
              </a>
            </Link>
            <Link href="/why-us">
              <a className="text-sm md:text-md focus:text-sky-600 px-6">
                Why Choose Us
              </a>
            </Link>
            <Link href="/our-approach">
              <a className="text-sm md:text-md focus:text-sky-600 px-6">
                Our Approach
              </a>
            </Link>
            <Link href="/catalogue">
              <a className="text-sm md:text-md focus:text-sky-600 px-6">
                Our Catalogue
              </a>
            </Link>
          </nav>

          {/*Mobile Bottom Nav*/}
          {/*Menu Toggle Button */}
          <div className="text-white transition-all duration-300 md:hidden">
            {!show ? (
              <Popover.Button>
                <span className="sr-only">Open menu</span>
                <svg
                  onClick={() => setShow(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Popover.Button>
            ) : (
              <Popover.Button>
                <span className="sr-only">Close menu</span>
                <svg
                  onClick={() => setShow(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Popover.Button>
            )}
          </div>

          {show && (
            <div
              className={classNames(
                show
                  ? 'absolute top-16 z-50 left-7 bg-gray-700 w-[280px] transition-all duration-300 rounded-lg shadow-md  px-4 py-8 flex flex-col'
                  : ' bg-gray-700 h-0 w-0',
                'absolute top-16 left-7 bg-gray-700 w-[280px] transition-all duration-300 rounded-lg shadow-md  px-4 py-8 flex flex-col',
              )}
            >
              <Link href="/" passHref>
                <a
                  onClick={() => setShow(false)}
                  className="text-white font-medium text-md py-2"
                >
                  Home
                </a>
              </Link>
              <Link href="/why-us" passHref>
                <a
                  onClick={() => setShow(false)}
                  className="text-white font-medium text-md py-2"
                >
                  Why Choose Us
                </a>
              </Link>
              <Link href="/who-we-are" passHref>
                <a
                  onClick={() => setShow(false)}
                  className="text-white font-medium text-md py-2"
                >
                  Who We Are
                </a>
              </Link>
              <Link href="/our-approach" passHref>
                <a
                  onClick={() => setShow(false)}
                  className="text-white font-medium text-md py-2"
                >
                  Our Approach
                </a>
              </Link>
              <Link href="/our-promise" passHref>
                <a
                  onClick={() => setShow(false)}
                  className="text-white font-medium text-md py-2"
                >
                  Our Promise
                </a>
              </Link>
              <Link href="/catalogue" passHref>
                <a
                  onClick={() => setShow(false)}
                  className="text-white font-medium text-md py-2"
                >
                  Our Catalogue
                </a>
              </Link>

              {!user ? (
                <div className="flex space-x-2 items-center justify-between py-2 px-2 rounded bg-gray-600">
                  <Link href="/signin">
                    <a
                      onClick={() => setShow(false)}
                      className="text-md font-bold hover:text-slate-200"
                    >
                      Sign In
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="flex space-x-2 items-center justify-between py-2 px-2 rounded bg-gray-600">
                  <button
                    onClick={handleSignOut}
                    className="text-md font-bold hover:text-slate-200"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
          {/*Mobile Bottom Nav Ends*/}

          {/*User Nav Starts */}
          <div>
            {user ? (
              <div className="flex space-x-5">
                {user.role === 'supabase_admin' ? (
                  <Link href="/admin" passHref>
                    <div className="flex items-center text-sky-600 cursor-pointer">
                      <span className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white bg-sky-600 rounded-full p-1"
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
                      <p className="text-xs md:text-sm text-white pl-2">
                        Admin Dashboard
                      </p>
                    </div>
                  </Link>
                ) : (
                  <Link href="/profile" passHref>
                    <div className="flex items-center text-sky-600 cursor-pointer">
                      <span className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white bg-sky-600 rounded-full p-1"
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
                      <p className="text-xs md:text-sm text-white pl-2">
                        {!!user && 'Profile'}
                      </p>
                    </div>
                  </Link>
                )}

                <Link href="/cart" passHref>
                  <div className="flex items-center text-sky-50 cursor-pointer relative">
                    <p className="text-sky-50 h-4 w-4 bg-sky-700 rounded-full p-1 absolute -top-4 -right-2 flex justify-center items-center">
                      {cart.length}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                </Link>

                <div
                  className="flex px-2 py-1 bg-gray-600 rounded items-center text-red-50 cursor-pointer"
                  onClick={handleSignOut}
                >
                  <p>Logout</p>
                  <span className="pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3 lg:space-x-8 items-center">
                <Link href="/signin">
                  <a className="text-sm md:text-md font-bold">Sign In</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Navbar;
