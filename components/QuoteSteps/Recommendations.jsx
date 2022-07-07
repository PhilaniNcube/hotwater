/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import formatter from '../../lib/format';
import { parse } from 'cookie';
import roundUp from '../../lib/roundUp';
import {motion} from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const Recommendations = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  const [ref, { height, width }] = useMeasure();
  console.log('Step9', quoteInfo);

    const [geyserPrice, setGeyserPrice] = useState();
    const [geyserSize, setGeyserSize] = useState();
    const [installation, setInstallation] = useState();
    const [plumbing, setPlumbing] = useState();

   const options = {
  plugins: {
    title: {
      display: true,
      text: `Estimated Cost ${formatter.format(geyserPrice + 3500 +4500) }`,
    },
  },
  responsive: false,

  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },

};

const labels = ['Total Cost']



  useEffect(() => {
if (quoteInfo.flowRate <= 12   ) {
  setGeyserPrice(6900)
  setInstallation(5500)
  setPlumbing(5060)
  setGeyserSize(12)

} else if (quoteInfo.flowRate <= 17) {
   setGeyserPrice(8970)
  setInstallation(6500)
  setPlumbing(5060)
  setGeyserSize(16)
} else if (quoteInfo.flowRate <= 22) {
    setGeyserPrice(12880)
  setInstallation(7000)
  setPlumbing(5060)
  setGeyserSize(20)
} else if (quoteInfo.flowRate <= 30) {
   setGeyserPrice(14030)
  setInstallation(7000)
  setPlumbing(5060)
  setGeyserSize(26)
}

  },[]);





const data = {
  labels,

  datasets: [
    {
      label: 'Geyser',
      data: [geyserPrice],
      backgroundColor: '#41a6dd',
      barThickness: 100,
    },
    {
      label: 'Installation',
      data: [installation],
      backgroundColor: '#aaaaaa',
      barThickness: 100,
    },
    {
      label: 'Plumbing',
      data: [plumbing],
      backgroundColor: '#c03d32',
      barThickness: 100,
    },
  ],
};






  return (
    <motion.div
      transition={{ duration: 0.3}}
        key="property"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }} className="mt-8 min-h-[90vh]">

    <p className="text-center text-lg text-gray-700 mb-3 font-medium max-w-[60ch] mx-auto">Based on the information provided we have calculated the following size gas geyser for your property: <br /> <span className="text-2xl font-bold">{geyserSize}L/Min*</span></p>
    <p className="text-center text-lg mb-6 text-gray-700  font-medium max-w-[60ch] mx-auto">The estimated total cost based on this size geyser is:<br /> <span className="text-2xl font-bold">
 {` ${formatter.format(geyserPrice + installation +plumbing) }`}* </span> </p>


    <div className="flex max-w-7xl min-w-[200px] w-[380px] px-6 min-h-[400px] max-h-[450px] mx-auto items-center flex-col bg-gray-100 py-3 mb-8 relative"  ref={ref} >

          <Bar options={ {
                plugins: {

                  legend: {
                    position: 'top',

                  }
                },
                locale: 'ZA',
                responsive: true,
                maintainAspectRatio: false,

                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                  },
                },

              }}
              data={data} />

          </div>

           <p className="text-sm text-center text-gray-600 max-w-[600px] mx-auto">*This total estimated cost is based on the information as provided. It includes the cost for the gas geyser, gas installation and plumbing work and excludes the cost for a gas cage, gas cylinder(s) and gas supply.
</p>

          <div className="max-w-7xl mx-auto mt-3 px-4 text-auto">


       <p className="mt-4 text-gray-700 font-medium text-sm md:text-lg px-8 text-center">Would you like us to get in touch with you to discuss your requirements and to advise and quote you for a water heating solution for your property?</p>
          </div>

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
           installation: true,
           installationCost: installation,
           plumbingCost: plumbing,
           geyserPrice: geyserPrice,
           geyserSize: geyserSize,
          }
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
    </motion.div>
  );
};

export default Recommendations;
