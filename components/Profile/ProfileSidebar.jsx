/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useUser } from '../../hooks/user';

function ProfileNav({ children }) {
  const [show, setShow] = useState(true);

  const user = useUser();

  return (
    <Fragment>
      {/* Vertical navigation starts */}
      <div className="flex flex-no-wrap h-full">
        <div className="min-h-[90vh] bg-gray-900 p-4">
          <div className="flex w-full h-full">
            <div className=" flex flex-col h-full justify-between">
              <div className="">
                <div className="flex items-center">
                  <img src="/images/logo-01.svg" alt="" className="w-16" />
                  {show && (
                    <div className="pl-3" id="closed">
                      <h3 className="text-lg font-bold uppercase text-white tracking-wider">
                        Hotwater24
                      </h3>
                    </div>
                  )}
                </div>
                <div className="mt-10 flex items-center relative">
                  {show ? (
                    <div arial-label="search" className="w-56 relative">
                      <div className="absolute p-2">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <input
                        type="seach"
                        className="w-full py-2 pl-10 bg-gray-800 rounded text-base leading-none text-white placeholder-white"
                        placeholder="Search"
                      />
                    </div>
                  ) : (
                    <div>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.1665 1.66667C13.3065 1.66667 16.6665 5.02667 16.6665 9.16667C16.6665 13.3067 13.3065 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16667C1.6665 5.02667 5.0265 1.66667 9.1665 1.66667ZM9.1665 15C12.389 15 14.9998 12.3892 14.9998 9.16667C14.9998 5.94333 12.389 3.33333 9.1665 3.33333C5.94317 3.33333 3.33317 5.94333 3.33317 9.16667C3.33317 12.3892 5.94317 15 9.1665 15ZM16.2373 15.0592L18.5948 17.4158L17.4157 18.595L15.059 16.2375L16.2373 15.0592Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  )}
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
                    <li
                      tabIndex={0}
                      role="button"
                      aria-label="People"
                      className="cursor-pointer mt-6"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.6665 18.3333C1.6665 16.5652 2.36888 14.8695 3.61913 13.6193C4.86937 12.369 6.56506 11.6667 8.33317 11.6667C10.1013 11.6667 11.797 12.369 13.0472 13.6193C14.2975 14.8695 14.9998 16.5652 14.9998 18.3333H13.3332C13.3332 17.0073 12.8064 15.7355 11.8687 14.7978C10.931 13.8601 9.65925 13.3333 8.33317 13.3333C7.00709 13.3333 5.73532 13.8601 4.79764 14.7978C3.85995 15.7355 3.33317 17.0073 3.33317 18.3333H1.6665ZM8.33317 10.8333C5.57067 10.8333 3.33317 8.59584 3.33317 5.83334C3.33317 3.07084 5.57067 0.833336 8.33317 0.833336C11.0957 0.833336 13.3332 3.07084 13.3332 5.83334C13.3332 8.59584 11.0957 10.8333 8.33317 10.8333ZM8.33317 9.16667C10.1748 9.16667 11.6665 7.675 11.6665 5.83334C11.6665 3.99167 10.1748 2.5 8.33317 2.5C6.4915 2.5 4.99984 3.99167 4.99984 5.83334C4.99984 7.675 6.4915 9.16667 8.33317 9.16667ZM15.2365 12.2525C16.4076 12.7799 17.4015 13.6344 18.0987 14.7131C18.7958 15.7918 19.1666 17.0489 19.1665 18.3333H17.4998C17.5 17.37 17.222 16.4271 16.6991 15.618C16.1762 14.8089 15.4307 14.1681 14.5523 13.7725L15.2357 12.2525H15.2365ZM14.6632 2.84417C15.5028 3.19025 16.2206 3.77795 16.7257 4.53269C17.2307 5.28744 17.5002 6.1752 17.4998 7.08334C17.5002 8.22695 17.0729 9.32936 16.302 10.174C15.531 11.0187 14.4721 11.5446 13.3332 11.6483V9.97084C13.9506 9.8824 14.5235 9.59835 14.9676 9.16038C15.4117 8.72242 15.7037 8.1536 15.8008 7.53745C15.8979 6.92129 15.7948 6.29025 15.5068 5.73696C15.2188 5.18368 14.761 4.73729 14.2007 4.46334L14.6632 2.84417Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                    </li>
                  </ul>
                  {show && (
                    <div className="w-full mt-10">
                      <Link href="/profile/myquotes" passHref>
                        <p className="text-base leading-4 pl-3 cursor-pointer text-gray-400">
                          My Quotes
                        </p>
                      </Link>
                      <Link href="/profile/info" passHref>
                        <p className="text-base leading-4 pl-3 cursor-pointer pt-7 text-gray-400">
                          Personal Info
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
                    <div className="flex items-center mt-4">
                      <img
                        src="/images/avatar.svg"
                        alt="profile picture"
                        className="w-7 h-7 rounded-full"
                      />
                      <p className="text-base leading-4 pl-3 text-gray-100">
                        {user && user.email}
                      </p>
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
