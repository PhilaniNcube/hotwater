/* eslint-disable @next/next/no-img-element */
import React from 'react';
export default function ProductsSlide({ products, setQuoteInfo, quoteInfo }) {
  return (
    <>
      <div className="flex items-center justify-start w-1/2 h-full py-12 px-4 overflow-scroll">
        {products.map((product) => (
          <div className="max-w-[70%] mx-2" key={product.id}>
            <div className="bg-gray-100 shadow-lg rounded-tl rounded-tr">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full"
              />
            </div>
            <div className="bg-white shadow px-5 rounded-b">
              <p className="w-48 text-base font-semibold leading-5 pt-4 text-gray-800">
                {product.name}
              </p>
              <div className="flex items-center pt-2">
                <div className="flex items-center">
                  <p className="text-xs leading-3 text-sky-700 pl-1">
                    R {product.price}
                  </p>
                </div>
                <div className="flex items-center pl-4">
                  <p className="text-xs leading-3 text-sky-700 pl-1">
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
                <p className="text-xs leading-1 text-sky-700 bg-gray-300 px-4 py-2 rounded-lg">
                  Select Geyser
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
