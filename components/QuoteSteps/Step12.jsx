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
    installation,
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
        product_id: product_id || null,
        installation: installation,
      },
    ]),
  );

  const handleSubmit = async () => {
    window.dataLayer = [];
    window.dataLayer.push({ event: 'generate_lead' });

    window.dataLayer.push({ event: 'complete_recommendation' });

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
    <div className="max-w-6xl mx-auto my-16 lg:my-4 px-6 lg:px-0">
      <p className="py-1 text-center font-bold text-gray-600">
        Below is a summary of the information you have provided to us.
      </p>

      <QuoteCard quote={quoteInfo} />

      <div
        id="save"
        className="flex items-center justify-center space-x-6 my-16"
      >
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
          className="bg-sky-500 hover:bg-sky-600 text-center text-white text-lg md:text-xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow my-8"
        >
          {mutation.isLoading ? 'Loading...' : 'Complete the process'}
        </button>
      </div>
    </div>
  );
};

export default Step11;
