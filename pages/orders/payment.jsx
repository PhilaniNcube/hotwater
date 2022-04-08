/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Payment = ({ paymentResult }) => {
  console.log(paymentResult);

  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
      <Head>
        <title>Payment</title>
      </Head>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
              Thank You For Your Order
            </p>
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-3/5">
            <p className="text-base leading-6 text-gray-600">
              We will be in contact shortly in order to arrange for delivery of
              your order
            </p>
          </div>
          <div className="mt-16 w-full">
            <Link href="/orders" passHref>
              <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                <p className="text-xl font-medium leading-5">View Account</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
          <div className=" object-cover">
            <img
              className="w-full h-full lg:block"
              src="/images/bath-1.jpg"
              alt="sofa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

export async function getServerSideProps({ req }) {
  console.log(req);

  if (req.method !== 'POST') {
    return {
      props: {
        paymentResult: 'none',
      },
    };
  }

  if (req.method === 'POST') {
    return {
      props: {
        paymentResult: true,
      },
    };
  }
}
