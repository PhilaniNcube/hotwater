/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { supabase } from '../../utils/supabase';
import * as d3 from 'd3';
import formatter from '../../lib/format';
import { parse } from 'cookie';
import roundUp from '../../lib/roundUp';

const Recommendations = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [ref, { height, width }] = useMeasure();
  console.log('Step9', quoteInfo);

const [geyserPrice, setGeyserPrice] = useState();
const [geyserSize, setGeyserSize] = useState();






   const pieChart = useRef();

   let radius = Math.min(width, height) / 2;


  // const flowRate = Math.ceil(parseInt(quoteInfo.flowRate + 1));
  // const topRate = Math.ceil(parseInt(quoteInfo.flowRate + 8.3));

   let ups;
   let min;
   let max;

    if(geyserSize < 20) {
      ups = 0
    } else {
      ups = 2500 * 1.15
    }


    if(quoteInfo.gasSupply === 'none') {
      let cageCost = 3500 * 1.15

       min = ((5000*1.15) + cageCost + (2500*1.15) + ups);
      max = ((8000*1.15) + cageCost + (4000*1.15) + ups);


    } else {
      min = ((5000*1.15) +  (2500*1.15) + ups);
      max = ((8000*1.15) +  (4000*1.15) + ups);
    }






     useEffect(() => {

   if(quoteInfo.flowRate < 12) {


   setGeyserPrice(roundUp((5200*1.15) + (750*1.15)))
    setGeyserSize(12)

   } else if (quoteInfo.flowRate >= 12 && quoteInfo.flowRate < 16) {
    setGeyserPrice(roundUp((6800*1.15) + (820*1.15)))
        setGeyserSize(16)
   } else if (quoteInfo.flowRate >= 16 && quoteInfo.flowRate < 20) {
    setGeyserPrice(roundUp((11200*1.15)))
     setGeyserSize(20)
   } else if (quoteInfo.flowRate < 26) {
    setGeyserPrice(roundUp(12200*1.15))
     setGeyserSize(26)
   } else {
    return
   }


  },[]);






  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl px-4 mx-auto">
         <div className="md:border-r md:border-gray-300 w-full">
            <p className="text-gray-800 font-bold text-3xl text-center">Your Geyser</p>

            {quoteInfo.flowRate < 26 ? (
              <div>
                  <p className=" text-gray-700 font-bold text-sm md:text-base">Based on your answers, you need a gas geyser with the following flow rate</p>
                  <p className="font-bold text-sky-500 text-5xl text-center flex flex-col">
                    <span>{geyserSize}l/min</span>
                    <span className="text-lg">flow rate</span>
                  </p>

                  <p className="text-center text-gray-700 font-bold text-sm mt-3 md:text-base">You are looking at:</p>
                   <p className="font-bold text-sky-500 text-5xl text-center flex flex-col">{formatter.format(parseInt(geyserPrice))}</p>
                    <p className="text-center text-gray-700 font-bold text-sm mt-3 md:text-base">for the geyser</p>
                </div>
              ) : (
                <article>
                <p className="text-sm text-gray-700">Based on your answers, we have calculated that you will need a geysers exceeding a flow rate of <span className="font-bold">26 L/min.</span> This will require a specialised installation. Please complete the following questions so that we can get in touch a suitable solution. </p>
                </article>
              )}


              <div className="flex w-full flex-col items-center space-y-3 md:flex-row md:justify-center md:space-x-3 md:space-y-0 mt-4">
              <span className="flex py-3 px-6 cursor-pointer rounded-full items-center space-x-3 text-white font-bold bg-sky-500 text-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <p>Yes please</p>
              </span>
              <span className="flex py-3 px-6 rounded-full cursor-pointer space-x-3 items-center text-white font-bold bg-red-500 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                 <p>No thanks</p>
              </span>
              </div>

         </div>

         <div className="md:border-l flex flex-col mt-10 md:mt-0 items-center  md:border-gray-300 w-full px-8">
             <p className="text-gray-800 font-bold text-3xl text-center">Installation & Plumbing</p>
              <p className=" text-gray-700 font-bold text-sm text-center md:text-base">Based on the flowrate of your recommended geyser, your installation will be in the range of:</p>
                  <p className="font-bold text-sky-500 text-center mt-3 flex flex-col">

                    <span className="text-xl">{`${formatter.format((roundUp(min)))} - ${formatter.format(roundUp(max))}`}</span>
                  </p>

                   <p className=" text-gray-700 font-bold text-sm text-center md:text-base mt-8">Are you interested in getting a certified technician to install your gas geyser?</p>

                    <div className="flex flex-1  w-full flex-col items-center space-y-3 md:flex-row md:justify-center md:items-end md:space-x-3 md:space-y-0 mt-4">
              <span onClick={() => {
                setQuoteInfo({...quoteInfo, installation: true })
              }}
              className="flex py-3 px-6 cursor-pointer rounded-full items-center space-x-3 text-white font-bold bg-sky-500 text-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <p>Yes please</p>
              </span>
              <span onClick={() => {
                setQuoteInfo({...quoteInfo, installation: false })
              }} className="flex py-3 px-6 rounded-full cursor-pointer space-x-3 items-center text-white font-bold bg-red-500 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                 <p>No thanks</p>
              </span>
              </div>
         </div>
      </div>
       <div className="flex items-center justify-center space-x-6 mt-12 mb-8">
        {quoteInfo.installation !== null ?
        (
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
              Please answer the question
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
