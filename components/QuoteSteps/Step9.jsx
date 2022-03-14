/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useProducts } from '../../hooks/products';
import ProductSlide from '../ProductSlide/ProductSlide';

const Step9 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const { products, productsIsLoading, productsIsError } = useProducts(
    quoteInfo.flowRate,
    null,
  );

  console.log(products);

  return (
    <div className="my-8">
      <h3 className="text-2xl text-gray-700 text-center mb-3">
        Our Expert Recommendations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center px-8 md:px-4 lg:px-0">
          <p className="text-xl text-gray-700">Geyser Installations</p>
          <p className="text-sm  text-gray-700">
            For safety and quality purposes of the installation work performed
            we highly recommend you to only work with certified installers that
            are registered with the LPGas Association of South Africa.
          </p>

          <div className="mt-4 min-w-[70%]">
            <div className="grid grid-cols-2 bg-sky-500 text-white px-2 py-3 rounded-t-lg">
              <h3>Geyser</h3>
              <h3>Installation Cost</h3>
            </div>
            <div className="grid grid-cols-2 bg-gray-100 px-2 py-3 mb-1 rounded-b shadow">
              <p className="text-xs font-medium">11-16l/min</p>
              <p className="text-xs font-medium">R2500 - R4600</p>
            </div>
            <div className="grid grid-cols-2 bg-gray-100 px-2 py-3 mb-1 rounded shadow">
              <p className="text-xs font-medium">20l/min</p>
              <p className="text-xs font-medium">R3500 - R6000</p>
            </div>
            <div className="grid grid-cols-2 bg-gray-100 px-2 py-3 rounded shadow">
              <p className="text-xs font-medium">24-26l/min</p>
              <p className="text-xs font-medium">R7000 - R9000</p>
            </div>
          </div>

          <p className="text-md font-medium text-center py-2 text-gray-700">
            Arre you interested in getting professional installation from our
            qualified partners?
          </p>

          <div className="grid grid-cols-2 gap-x-12 mt-2">
            <div
              className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  installation: false,
                });
              }}
            >
              {quoteInfo.installation === false && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 absolute top-2 right-2 text-sky-500"
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
              <img className="h-16 w-16" alt="" src="/images/icons/close.svg" />
              <p className="text-lg text-center text-sky-500 font-bold">No</p>
              <p className="text-sm text-red-600 font-medium">
                I am not interested
              </p>
            </div>
            <div
              className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
              onClick={() => {
                setQuoteInfo({
                  ...quoteInfo,
                  installation: true,
                });
              }}
            >
              {quoteInfo.installation && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 absolute top-2 right-2 text-sky-500"
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
              <img className="h-16 w-16" alt="" src="/images/icons/check.svg" />
              <p className="text-lg text-center text-sky-500 font-bold">Yes</p>
              <p className="text-sm text-green-600 font-medium">
                I am interested
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ProductSlide products={products} />
        </div>
      </div>
    </div>
  );
};

export default Step9;
