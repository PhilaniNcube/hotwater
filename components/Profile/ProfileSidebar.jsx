/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@supabase/auth-helpers-react';


function ProfileNav({ children }) {
  const [show, setShow] = useState(true);

  const  user  = useUser();

  return (
    <Fragment>
      {/* Vertical navigation starts */}
      <div className="flex flex-no-wrap h-full">
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
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden"> {children}</div>
      </div>
      {/* Vertical navigation ends */}
    </Fragment>
  );
}

export default ProfileNav;
