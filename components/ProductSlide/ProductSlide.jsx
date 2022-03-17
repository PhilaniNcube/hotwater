/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import formatter from '../../lib/format';

export default function ProductsSlide({ products, setQuoteInfo, quoteInfo }) {
  return (
    <Fragment>
      <div className="flex items-center justify-start w-5/6 mx-auto h-[65vh] py-12 px-4 overflow-x-scroll overflow-y-hidden">
        {products.map((product) => (
          <div className="max-w-[70%] mx-2 relative" key={product.id}>
            {quoteInfo.product_id === product.id && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 absolute top-2 right-16 text-sky-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            <div className="shadow-lg rounded-tl rounded-tr">
              <img
                src={product.image}
                alt={product.name}
                className="w-[25vh] h-[25vh]"
              />
            </div>
            <div className="bg-white shadow px-5 rounded-b">
              <p className="w-48 text-xs font-semibold leading-5 pt-4 text-gray-800">
                {product.name}
              </p>
              <div className="flex items-center pt-2">
                <div className="flex items-center">
                  <p className="text-xs leading-3 font-medium text-sky-700 pl-1">
                    {formatter.format(product.price)}
                  </p>
                </div>
                <div className="flex items-center pl-4">
                  <p className="text-xs leading-3 font-medium text-sky-700 pl-1">
                    {product.flowRate} l/min
                  </p>
                </div>
              </div>
              <p className="py-2 text-xs leading-4 dark:text-gray-400 text-gray-500">
                {product.brand_id.name}
              </p>
              <div
                className="flex cursor-pointer py-4"
                onClick={() => {
                  setQuoteInfo({
                    ...quoteInfo,
                    product_id: product.id,
                  });
                }}
              >
                <p className="text-xs text-white font-medium leading-1 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300">
                  Select Geyser
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
