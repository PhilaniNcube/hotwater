/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import { supabase } from '../../utils/supabase';
import * as d3 from 'd3';
import formatter from '../../lib/format';
import { parse } from 'cookie';
import roundUp from '../../lib/roundUp';
import { select, scaleBand, axisBottom, stack, max, scaleLinear, axisLeft } from 'd3';

const Recommendations = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [ref, { height, width }] = useMeasure();
  console.log('Step9', quoteInfo);

  const [geyserPrice, setGeyserPrice] = useState();
  const [geyserSize, setGeyserSize] = useState();

  let installationMin;
  let installationMax;


    if(quoteInfo.gasSupply === 'none') {

      installationMin = ((5000*1.15) + (1800*1.15));
      installationMax = ((5000*1.15) + (3500*1.15));




    } else {
      installationMin = ((5000*1.15) );
      installationMax = ((8000*1.15) );

    }


  const svgRef = useRef()

  const keys = ['GeyserPrice', 'Installation', 'Plumbing']

  const colors = {"GeyserPrice":"#16a34a", "Installation":"#2563eb", "Plumbing":"#eab308"}



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

     let data = [
    {range: 'Minimum Cost', GeyserPrice: geyserPrice, Installation: installationMin, Plumbing: 2500*1.15 },
    {range: 'Maximum Cost', GeyserPrice: geyserPrice, Installation: installationMax, Plumbing: 4000*1.15 },
  ]

  const minTotal = data[0].GeyserPrice + data[0].Installation + data[0].Plumbing
  const maxTotal = data[1].GeyserPrice + data[1].Installation + data[1].Plumbing

  useEffect(() => {
    const svg = select(svgRef.current)

    const stackGenerator = stack().keys(keys)
    const layers = stackGenerator(data)

    const extent = [0, max(layers, layer => max(layer, sequence => sequence[1]))]


    const xScale = scaleBand().domain(data.map(d =>  d.range)).range([0, width*.9]).padding(0.4)

    const xAxis = axisBottom(xScale)
    svg.select(".x-axis").attr("transform", `translate(0, ${height * 0.7})`).call(xAxis)

    const yScale = scaleLinear().domain(extent).range([(height *0.7) , 0])

    const yAxis = axisLeft(yScale)
    svg.select(".y-axis").call(yAxis)

    svg.selectAll(".layer").data(layers).join("g").attr("class", "layer").attr("fill", layer => {
      return colors[layer.key]
    })
    .selectAll("rect").data(layer => layer).join("rect").attr("x", sequence => {
      return xScale(sequence.data.range)
    }).attr("width", xScale.bandwidth()).attr("y", sequence => yScale(sequence[1]))
    .attr("height", sequence => yScale(sequence[0]) - yScale(sequence[1]))


    console.log({height})


   }, [colors, installationMin, installationMax, width, height])


  return (
    <div className="mt-8 min-h-[90vh]">

    <p className="text-center text-4xl text-gray-700 mb-3 font-bold">Geyser Size: {geyserSize}L/Min</p>
    <h2 className="text-center text-4xl text-gray-700  font-bold">Estimated Cost</h2>
    <div className="flex max-w-7xl px-6 min-h-[500px] mx-auto flex-col bg-gray-100 py-3 mb-8 relative"  ref={ref} >
               <span className="flex justify-between absolute left-0 right-0 top-8 w-[65%] mx-auto">
         <small className=" text-xs md:text-lg text-sky-500 font-bold translate-x-6">{formatter.format(roundUp(minTotal))}</small>
         <small className="text-sky-500 text-xs md:text-lg font-bold lg:-translate-x-16">{formatter.format(roundUp(maxTotal))}</small>
       </span>
     <svg ref={svgRef} className="w-full mx-auto translate-y-16 translate-x-3 h-[500px] ">

       <g className="x-axis" />
       <g className="y-axis" />
       </svg>

       <p className="text-xs text-gray-600">Costs are based on estimates, which are based on information provided and fluctuating factors (mileage, size and set-up of property). These estimates are not a promise or guarantee of a customer’s savings. </p>
      </div>

       <p className="mt-4 text-gray-700 font-medium text-sm md:text-lg px-8 text-center">Would you like us to get in touch with you to discuss your requirements and to advise and quote you for a water heating solution for your property?</p>





       <div className="flex items-center justify-center space-x-6 mt-6 mb-8">
        {
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
           <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
           <span onClick={() => {
             setQuoteInfo({ ...quoteInfo,
           installation: false}
           )
           nextPage()
           }}

           className="flex items-center bg-red-500 cursor-pointer rounded-full px-6 py-2 space-x-2 text-white text-base font-medium ">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>No thanks</p>
           </span>
           <span onClick={() => {
             setQuoteInfo({ ...quoteInfo,
           installation: false}
           )
            nextPage()
           }} className="flex bg-sky-500 items-center cursor-pointer rounded-full px-6 py-2 space-x-2 text-white text-base font-medium ">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Yes thanks</p>
           </span>
           </div>
          </Fragment>
        }
      </div>
    </div>
  );
};

export default Recommendations;
