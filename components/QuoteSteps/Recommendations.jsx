/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { supabase } from '../../utils/supabase';
import * as d3 from 'd3';
import formatter from '../../lib/format';
import { parse } from 'cookie';

const Recommendations = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [ref, { height, width }] = useMeasure();
  console.log('Step9', quoteInfo);

const [geyserPrice, setGeyserPrice] = useState();





   const pieChart = useRef();

   let radius = Math.min(width, height) / 2;


  // const flowRate = Math.ceil(parseInt(quoteInfo.flowRate + 1));
  // const topRate = Math.ceil(parseInt(quoteInfo.flowRate + 8.3));


     useEffect(() => {

   if(quoteInfo.flowRate < 12) {
   setGeyserPrice((5200*1.15) + (750*1.15))
   } else if (quoteInfo.flowRate >= 12 && quoteInfo.flowRate < 16) {
    setGeyserPrice((6800*1.15) + (820*1.15))
   } else if (quoteInfo.flowRate >= 16 && quoteInfo.flowRate < 20) {
    setGeyserPrice((11200*1.15))
   } else {
    setGeyserPrice((12200*1.15))
   }

     console.log(geyserPrice)
    const piedata = d3.pie().value((d) => d.count)([{item: 'geyser price', count: parseInt(geyserPrice), color: '#ffab22'},
                                          {item: 'installation cost', count: 5000, color: '#134e6f'},
                                          {item: 'plumbing cost', count: 2500, color: '#134500'},
  ]);
    console.log(piedata);

    const arc = d3.arc().innerRadius(110).outerRadius(140);

    const colors = d3.scaleOrdinal(['#ffaB22', '#134e6f', '#134500']);

    const svg = d3
      .select(pieChart.current)
      .attr('width', width)
      .attr('height', 500)
      .append('g')
      .attr('transform', `translate(150, 240)`);

    svg
      .append('g')
      .selectAll('path')
      .data(piedata)
      .join('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors(i))
      .attr('stroke', 'white');

    svg
      .append('text')
      .selectAll('path')
      .data(piedata)
      .attr('x', 30)
      .attr('y', 30)
      .attr('font-size', '14px')
      .attr('color', 'green')
      .text((d) => d.data.item);
  });


  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-1 lg:gap-2 max-w-6xl mx-auto">
        {/**

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

          {products && products.length > 0 && (
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

      */}

        <div className="flex flex-col items-center px-4 md:px-12">
          <p className="text-xl font-bold text-center text-sky-600 md:px-16 lg:px-24">
           Based on the information provided we have calculated the following size gas geyser for your property{' '}
            <span className="underline text-sky-600">
              {quoteInfo.flowRate}
              <span className="text-md font-normal">L/min</span>
            </span>
          </p>


          <div className="text-lg md:text-xl  font-medium text-center text-sky-600">

          </div>

              <div
                ref={ref}
                id="chart"
                className="bg-sky-200 my-3 mx-auto w-[300px] flex justify-center items-center h-[350px] shadow-md rounded-lg relative"
                >
                <div className="absolute inset-0 flex flex-col justify-center items-center">

                <p className="text-sm text-gray-700 font-semibold">Approx. Cost</p>

                <p className="text-xs font-medium text-center px-2 rounded py-1 text-white" style={{backgroundColor: '#ffaB22'}}>Geyser Cost: {formatter.format(parseInt(geyserPrice))}* </p>
                <p className="text-xs font-medium text-center px-2 rounded py-1 mt-1 text-white" style={{backgroundColor: '#134e6f'}}>Installation Cost: {formatter.format(5000)}* </p>
                <p className="text-xs font-medium text-center px-2 rounded py-1 mt-1 text-white" style={{backgroundColor: '#134500'}}>Plumbing Cost: {formatter.format(2500)}* </p>
                </div>
        <svg className="mx-auto w-full" ref={pieChart}></svg>


        </div>

           <p className=" text-white bg-red-500 text-xs text-center my-1 px-2 py-1 rounded-lg">*Above prices are estimates and include VAT</p>

          {quoteInfo.flowRate > 26 && (
            <p className="text-base text-center my-3 text-gray-700">
              According to your answers, we will have to contact you in order to
              give you more information on the best gas water heating solution
              for your property.
            </p>
          )}


            {/*quoteInfo.gasSupply === '' ?
          <span>
          <p className="text-gray-700 text-md text-center ">Based on the current gas supply, you have indicated that you do not have gas supply at your property.</p>
          <p className="text-gray-700 text-sm py-2 text-center ">We don’t offer pricing information on gas cages, gas cylinders and gas supply</p>
          </span>
          :
          <span>
          <p className="text-gray-700 mt-4 text-md text-center ">Based on the current gas supply, you have indicated that you  have gas supply at your property. </p>
          <p className="text-gray-700 text-sm py-2 text-center ">Please be aware that above mentioned price ranges are excluding the
             supply of gas, gas cylinders or gas cylinder cages.</p>
          <p className="text-gray-700 text-sm py-2 text-center ">Gas cages: Prices on gas cages ranges between R1.8K (single 19kg cage) to R3.5K (double 48kg).</p>
          <p className="text-gray-700 text-sm py-2 text-center ">Gas supply: Currently (June 2022) the market is offering LPG prices between R35.00 tot R40.00 per kg. </p>
          </span>
          */}

          <p className="text-md text-center my-3 text-sky-600 font-medium">
            Please indicate below if you would like us to quote and organize the
            installation* for you?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-4 md:gap-x-12">
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
                Yes please
              </p>
            </div>
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
          </div>





                    <p className="text-xs max-w-[80ch] mt-8 text-gray-700">
            *For safety and quality purposes of the installation work performed,
            we highly recommend you to only work with certified installers that
            are registered with the LPGas Association of South Africa.
          </p>
          <p className="text-xs max-w-[80ch] mt-8 text-gray-700">
            With our network of independent installers, we can assure you are in
            good hands!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 mt-8 mb-12">
        {quoteInfo.installation !== null || quoteInfo.flowRate > 26 ? (
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
