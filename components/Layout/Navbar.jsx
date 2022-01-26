/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <Fragment>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full mx-auto hidden xl:block bg-white shadow">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">
                <img
                  className="h-12 object-cover"
                  src="/images/logo-01.svg"
                  alt="logo"
                  aria-label="logo"
                />
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight hidden lg:block">
                  Hotwater24
                </h3>
              </div>
              <ul className="pr-12 xl:flex items-center h-full hidden">
                <Link href="/who-we-are" passHref>
                  <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 tracking-normal border-b-2 border-white">
                    Who We Are
                  </li>
                </Link>
                <Link href="/why-us" passHref>
                  <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mx-10 tracking-normal">
                    Why Us
                  </li>
                </Link>
                <Link href="/our-promise" passHref>
                  <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-10 tracking-normal">
                    Our Promise
                  </li>
                </Link>
                <Link href="/our-approach" passHref>
                  <li className="cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 tracking-normal">
                    Our Approach
                  </li>
                </Link>
              </ul>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full flex">
                  <div
                    className="w-full flex items-center justify-end relative cursor-pointer border-l-2 border-gray-200 pl-2"
                    onClick={() => setProfile(!profile)}
                  >
                    {profile && (
                      <ul className="p-2 w-40 border-r bg-white absolute rounded left-0 shadow mt-16 top-0 ">
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-user"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={7} r={4} />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className="ml-2">My Profile</span>
                          </div>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-help"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={12} r={9} />
                            <line x1={12} y1={17} x2={12} y2="17.01" />
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                          </svg>
                          <span className="ml-2">Help Center</span>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <circle cx={12} cy={12} r={3} />
                          </svg>
                          <span className="ml-2">Account Settings</span>
                        </li>
                      </ul>
                    )}
                    <img
                      className="rounded h-10 w-10 object-cover"
                      src="/images/avatar.svg"
                      alt="logo"
                    />
                    <p className="text-gray-800 text-sm ml-2">User Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-300 fixed top-0 z-40">
            <div className="w-24">
              <img
                className="h-12 object-cover"
                alt="logo"
                src="/images/logo-01.svg"
              />
              <p>Hotwater24</p>
            </div>
            <div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ' '
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? 'absolute w-full h-full transform -translate-x-0 z-40'
                : 'absolute w-full h-full transform -translate-x-full z-40'
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <img
                            className="h-8 object-cover"
                            alt="logo"
                            src="/images/logo-01.svg"
                          />
                          <p className="text-base md:text-2xl text-gray-800">
                            Hotwater24
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-900"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <Link href="/who-we-are" passHref>
                        <a className="cursor-pointer">
                          <li className="text-gray-800 pt-10">
                            <div className="flex items-center">
                              <p className="text-indigo-700 xl:text-base text-base ml-3">
                                Who We Are
                              </p>
                            </div>
                          </li>
                        </a>
                      </Link>
                      <Link href="/why-us">
                        <a className="cursor-pointer">
                          <li className="text-gray-800 pt-8">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                  Why Us
                                </p>
                              </div>
                            </div>
                          </li>
                        </a>
                      </Link>
                      <Link href="/our-promise">
                        <a className="cursor-pointer">
                          <li className="text-gray-800 pt-8">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Our Promise
                              </p>
                            </div>
                          </li>
                        </a>
                      </Link>
                      <Link href="/our-approach">
                        <a className="cursor-pointer">
                          <li className="text-gray-800 pt-8">
                            <div className="flex items-center">
                              <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">
                                Our Approach
                              </p>
                            </div>
                          </li>
                        </a>
                      </Link>
                    </ul>
                  </div>
                  <div className="w-full pt-4">
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src="/images/avatar.svg"
                            className="w-8 h-8 rounded-md"
                          />
                          <p className=" text-gray-800 text-base leading-4 ml-2">
                            User Profile
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}

        {/* Code block ends */}
      </div>
    </Fragment>
  );
}
