/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useUser } from '../../Context/AuthContext';

function ProfileNav({ children }) {
  const [show, setShow] = useState(true);

  const { user } = useUser();

  return (
    <Fragment>
      {/* Vertical navigation starts */}
      <div className="flex flex-no-wrap h-full overflow-scroll ">
        <div className="min-h-[90vh] bg-gray-900 p-4">
          <div className="flex w-full h-full">
            <div className=" flex flex-col h-full justify-between">
              <div className="">
                <Link href="/profile" passHref>
                  <div className="flex flex-col items-center cursor-pointer">
                    <img src="/images/logo-01.svg" alt="" className="w-16" />
                    {show && (
                      <div className="pl-3" id="closed">
                        <h3 className="text-lg font-bold uppercase text-white tracking-wider">
                          Profile
                        </h3>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="mt-10 flex items-center relative">
                  <div className="-mt-5" onClick={() => setShow(!show)}>
                    {show ? (
                      <button
                        aria-label="minimize sidebar"
                        id="close"
                        className="w-6 h-6 right-0 -mr-7 bg-indigo-500 absolute shadow rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4L6 8L10 12"
                            stroke="white"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        id="open"
                        className=" w-6 h-6 right-0 -mr-7 bg-indigo-500 absolute shadow rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      >
                        <svg
                          aria-label="expand sidebar"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12L10 8L6 4"
                            stroke="white"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <ul>
                    <li
                      tabIndex={0}
                      role="button"
                      aria-label="Overview"
                      className="cursor-pointer mt-10"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 2.5H9.16667V9.16667H2.5V2.5ZM2.5 10.8333H9.16667V17.5H2.5V10.8333ZM10.8333 2.5H17.5V9.16667H10.8333V2.5ZM10.8333 10.8333H17.5V17.5H10.8333V10.8333ZM12.5 4.16667V7.5H15.8333V4.16667H12.5ZM12.5 12.5V15.8333H15.8333V12.5H12.5ZM4.16667 4.16667V7.5H7.5V4.16667H4.16667ZM4.16667 12.5V15.8333H7.5V12.5H4.16667Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                    </li>
                  </ul>
                  {show && (
                    <div className="w-full mt-10">
                      <Link href="/profile/myquotes" passHref>
                        <p className="text-xs md:text-base leading-4 pl-1 md:pl-3 cursor-pointer text-gray-400">
                          My Quotes
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="flex items-center justify-between relative"
                id="profile"
              >
                {show ? (
                  <Fragment>
                    <div className="flex flex-col md:flex-row items-center mt-4">
                      <img
                        src="/images/avatar.svg"
                        alt="profile picture"
                        className="w-7 h-7 rounded-full"
                      />
                    </div>
                  </Fragment>
                ) : (
                  <div className="flex items-center justify-between mt-2">
                    <img
                      src="/images/avatar.svg"
                      alt="profile picture"
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full"> {children}</div>
      </div>
      {/* Vertical navigation ends */}
    </Fragment>
  );
}

export default ProfileNav;
