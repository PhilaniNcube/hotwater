/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Payment = ({ paymentResult }) => {
  console.log(paymentResult);

  return (
    <div className="dark:bg-gray-800">
      <div className="flex items-center justify-center">
        <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-12 px-4 xl:py-24 lg:py-12 py-8">
          <img
            src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/luxe.png"
            className="w-full block h-48 object-cover object-center lg:h-full mt-6"
            alt="hero-pic"
          />
          <p className="lg:text-5xl dark:text-white text-4xl text-center font-black leading-10 pt-12 pb-7">
            Thank You
          </p>
          <div className="flex items-center justify-center w-full">
            <button className="dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200 sm:w-auto w-full px-8 py-4 md:py-2 focus:outline-none border border-gray-800 hover:bg-gray-700 bg-gray-800 text-base focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 leading-none text-gray-50">
              Explore collection
            </button>
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
