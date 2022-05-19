/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useUser } from '../../Context/AuthContext';
import { useProducts } from '../../hooks/products';
import analytics from '../../utils/analytics';
import { supabase } from '../../utils/supabase';
import QuoteCard from '../Quote/QuoteCard';

const Step11 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [loading, setLoading] = useState(false);

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
    suburb,
    city,
    telephoneNumber,
    postalCode,
    completeSolution,
    product_id,
    installation,
    contactDay,
    contactTime,
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
        suburb: suburb,
        telephoneNumber: telephoneNumber,
        postalCode: postalCode,
        completeSolution: completeSolution,
        product_id: product_id || null,
        installation: installation,
        contactDay: contactDay,
        contactTime: contactTime,
      },
    ]),
  );

  const handleSubmit = async () => {
    setLoading(true);

    analytics.track('generate_lead');

    try {
      const quote = await mutation.mutateAsync();
      queryClient.setQueryData('quote', quote.data[0]);
      console.log('quote', quote);

      if (quote?.data[0]) {
        const mail = await fetch(`/api/mail/leads`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
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
            suburb: suburb,
            city: city,
            telephoneNumber: telephoneNumber,
            postalCode: postalCode,
            completeSolution: completeSolution,
            product_id: product_id || null,
            installation: installation,
            contactDay: contactDay,
            contactTime: contactTime,
          }),
        });

        console.log(mail);

        if (quoteInfo.product_id) {
          setLoading(false);
          router.push(`/catalogue/${quoteInfo.product_id}`);
        } else {
          nextPage();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-16 lg:my-4 px-6 lg:px-0">
      <QuoteCard quote={quoteInfo} />

      <p className="text-sm lg:px-36 text-gray-600 font-bold mt-2 text-center">
        Please click on the button below to complete the process. You will
        instantly receive an e-mail with the information you provided and we
        will get in touch with you as soon as possible.
      </p>

      <div
        id="save"
        className="flex items-center justify-center space-x-6 mb-12"
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
          disabled={loading}
          className="bg-sky-500 hover:bg-sky-600 text-center text-white text-lg md:text-xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow my-4"
        >
          {loading ? 'Loading...' : 'Complete the process'}
        </button>
      </div>
    </div>
  );
};

export default Step11;
