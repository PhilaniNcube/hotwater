import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Success() {
  return (
    <div className="">
      <div className="dark:bg-gray-900">
        <section className="mx-auto container w-full py-36">
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
              <h2>Thank you for you interest</h2>
              <p className="text-sm font-light text-white px-16 py-8">
                We have taken note of your interest and we will be in touch
                shortly with a quotation based on your answers.
              </p>
            </div>
            <div className="flex justify-center items-center mt-16">
              <Link href="/" passHref>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
