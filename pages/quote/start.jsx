import Link from 'next/link';
import React from 'react';

const Start = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="pt-4">
        <h1 className="font-sans text-2xl text-center font-semibold text-gray-800">
          Let us help you find your fit.
        </h1>

        <p className="text-lg text-center">
          Answer a few questions and we will contact you with expert
          recommendations
        </p>

        <div className="flex items-center py-8 justify-between">
          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-sm py-8">Answer a few questions</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-sky-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
              />
            </svg>
            <p className="text-sm py-8">We analyze your answers</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex flex-col w-64 h-64 shadow-lg rounded bg-gray-50 justify-center items-center hover:bg-gray-100 hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <p className="text-sm py-8 text-center">
              We contact you with a recommendation
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/quote" passHref>
            <button className="bg-sky-500 hover:bg-sky-700 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow">
              Lets get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
