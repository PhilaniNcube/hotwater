/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useUser } from '../../Context/AuthContext';
import { useProducts } from '../../hooks/products';
import { supabase } from '../../utils/supabase';
import QuoteCard from '../Quote/QuoteCard';

const Step11 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const { products, productsIsLoading, productsError } = useProducts(
    quoteInfo.flowRate,
  );

  console.log({ products, productsIsLoading, productsError });

  const router = useRouter();

  const {
    children,
    teenagers,
    adults,
    houseType,
    ownership,
    gasSupply,
    gasStove,
    gasWaterHeating,
    gasHeating,
    otherGasUse,
    locateOutside,
    gasGeyser,
    electricGeyser,
    solarGeyser,
    otherGeyser,
    standardShower,
    rainShower,
    bathtub,
    sink,
    dishwasher,
    washingmachine,
    flowRate,
    offGrid,
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    telephoneNumber,
    postalCode,
    completeSolution,
    product_id,
  } = quoteInfo;

  const queryClient = useQueryClient();

  const mutation = useMutation(() =>
    supabase.from('quotes').insert([
      {
        children: children,
        teenagers: teenagers,
        adults: adults,
        houseType: houseType,
        ownership: ownership,
        gasSupply: gasSupply,
        gasStove: gasStove,
        gasWaterHeating: gasWaterHeating,
        gasHeating: gasHeating,
        otherGasUse: otherGasUse,
        locateOutside: locateOutside,
        gasGeyser: gasGeyser,
        electricGeyser: electricGeyser,
        solarGeyser: solarGeyser,
        otherGeyser: otherGeyser,
        standardShower: standardShower,
        rainShower: rainShower,
        bathtub: bathtub,
        sink: sink,
        dishwasher: dishwasher,
        washingmachine: washingmachine,
        flowRate: flowRate,
        offGrid: offGrid,
        firstName: firstName,
        lastName: lastName,
        email: email,
        streetAddress: streetAddress,
        city: city,
        telephoneNumber: telephoneNumber,
        postalCode: postalCode,
        completeSolution: completeSolution,
        product_id: product_id,
      },
    ]),
  );

  const handleSubmit = async () => {
    try {
      const quote = await mutation.mutateAsync();
      queryClient.setQueryData('quote', quote.data[0]);
      console.log('quote', quote);

      if (quote?.data[0]) {
        nextPage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-16 lg:my-8 px-6 lg:px-12">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">Summary</h1>

      <p className="py-1 text-center">
        Below is a summary of the information you have provided to us. Please
        select one of our recommended geysers below
      </p>

      <QuoteCard quote={quoteInfo} />

      {productsIsLoading ? (
        <p className="text-xl mt-4 md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 lg:leading-9 text-gray-800">
          Loading Recommendations...
        </p>
      ) : (
        <div className>
          <div className="flex justify-center items-start px-4 md:px-6 xl:px-20 py-12 flex-col">
            <p className="text-xl md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 lg:leading-9 text-gray-800">
              Below is our recommendation based on the questions completed by
              you.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
              {products.products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-start items-start flex-col space-y-5"
                >
                  <div className=" cursor-pointer relative group flex justify-center items-center">
                    <Image
                      src={product.image}
                      width={400}
                      height={400}
                      alt={product.name}
                    />
                    <button
                      onClick={() => {
                        setQuoteInfo({
                          ...quoteInfo,
                          product_id: product.id,
                        });
                      }}
                      className="z-10 transition duration-300 opacity-100 xl:opacity-0 group-hover:opacity-100 ease-in-out absolute bg-white xl:bg-gray-800 bottom-0 shadow-md xl:shadow-none  xl:bottom-6 w-full py-3 text-sm font-medium leading-none text-gray-800  xl:text-white"
                    >
                      Add
                    </button>
                    <div className="bg-black transition duration-300 ease-in-out group-hover:bg-opacity-30 bg-opacity-0 h-full w-full absolute">
                      {' '}
                    </div>
                  </div>
                  <div className="flex w-full flex-col justify-start items-start">
                    <div className="w-full flex justify-between items-center">
                      <p className="text-base font-medium leading-none text-gray-800">
                        {product.name}
                      </p>
                    </div>
                    <p className="mt-4 text-xl font-medium leading-5 text-gray-600">
                      R {product.price} incl VAT
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center space-x-6 my-3">
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
          onClick={handleSubmit}
          disabled={mutation.isLoading}
          className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
        >
          {mutation.isLoading ? 'Loading...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default Step11;
