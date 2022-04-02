/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';
import ProductSlide from '../ProductSlide/ProductSlide';

const Step9 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [products, setProducts] = useState([]);
  const flowRate = Math.ceil(parseInt(quoteInfo.flowRate + 1));
  const topRate = Math.ceil(parseInt(quoteInfo.flowRate + 5));

  useEffect(async () => {
    let { data: products, error } = await supabase
      .from('products')
      .select(`*, brand_id(name)`)
      .gte('flowRate', flowRate)
      .lte('flowRate', topRate)
      .eq('inStock', true)
      .order('flowRate', { ascending: false });

    console.log(products, error);

    setProducts(products);
  }, []);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 lg:gap-2 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center overflow-hidden border-r-2 border-gray-300 px-4 md:px-12">
          <p className="text-xl md:text-3xl font-bold text-center text-gray-800">
            Your Geyser
          </p>

          <p className="text-base text-center mt-6 mb-2 text-gray-700">
            Based on your answers, you need a geyser with:
          </p>

          <p className="text-2xl md:text-3xl font-medium text-center flex flex-col text-sky-600">
            {quoteInfo.flowRate}l/min flow rate
          </p>

          {products.length > 0 && (
            <p className="text-base text-center my-3 text-gray-700">
              Please select your preferred geyser from the available options
              below (scroll left to see more):
            </p>
          )}

          {products && products.length === 0 ? (
            <p className="text-base text-center my-3 text-gray-700">
              According to your answers, we will have to contact you in order to
              give you more information on the best gas water heating solution
              for your property.
            </p>
          ) : (
            <ProductSlide
              products={products}
              quoteInfo={quoteInfo}
              setQuoteInfo={setQuoteInfo}
            />
          )}
        </div>

        <div className="flex flex-col items-center px-4 md:px-12">
          <p className="text-xl md:text-3xl font-bold text-center text-gray-800">
            Installation
          </p>
          {quoteInfo.flowRate < 26 && (
            <p className="mt-6 mb-4 text-center text-gray-600 text-base">
              Based on the flow rate of your recommended geyser your
              installation will be in the range of:
            </p>
          )}

          <p className="text-2xl  font-medium text-center text-sky-600">
            {quoteInfo.flowRate <= 16 && 'R2,500 - R4,600'}
            {quoteInfo.flowRate > 16 &&
              quoteInfo.flowRate < 20 &&
              'R3,500 - R6,000'}

            {quoteInfo.flowRate >= 20 &&
              quoteInfo.flowRate <= 25.9 &&
              'R7,000 - R9,000'}
          </p>

          {quoteInfo.flowRate > 26 && (
            <p className="text-base text-center my-3 text-gray-700">
              According to your answers, we will have to contact you in order to
              give you more information on the best gas water heating solution
              for your property.
            </p>
          )}

          <p className="text-base text-center my-3 text-gray-700">
            Please indicate below if you would like us to quote and organise the
            installation for you?
          </p>

          <div className="grid grid-cols-2 gap-x-12 mt-8">
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
              <p className="text-lg text-center text-sky-500 font-bold">
                No thanks
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
              <p className="text-lg text-center text-sky-500 font-bold">
                Yes Please
              </p>
            </div>
          </div>

          <p className="text-xs text-center mt-8 text-gray-700">
            For safety and quality purposes of the installation work performed
            we highly recommend you to only work with certified installers that
            are registered with the LPGas Association of South Africa.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-8 mb-12">
        {quoteInfo.installation !== null ? (
          <Fragment>
            {' '}
            <svg
              onClick={prevPage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <button
              onClick={nextPage}
              className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
            >
              Continue
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <svg
              onClick={prevPage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <p className="text-md text-sky-600 font-bold text-center">
              Please answer the questions
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Step9;
