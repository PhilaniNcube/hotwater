/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Step8 = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }) => {
  console.log('Step', page, quoteInfo);

  const incrementStandardShower = () => {
    const qty = quoteInfo.standardShower + 1;
    setQuoteInfo({ ...quoteInfo, standardShower: qty });
  };

  const decrementStandardShower = () => {
    const qty = quoteInfo.standardShower - 1;
    setQuoteInfo({ ...quoteInfo, standardShower: qty });
  };

  const incrementRainShower = () => {
    const qty = quoteInfo.rainShower + 1;
    setQuoteInfo({ ...quoteInfo, rainShower: qty });
  };

  const decrementRainShower = () => {
    const qty = quoteInfo.rainShower - 1;
    setQuoteInfo({ ...quoteInfo, rainShower: qty });
  };

  const incrementBathtub = () => {
    const qty = quoteInfo.bathtub + 1;
    setQuoteInfo({ ...quoteInfo, bathtub: qty });
  };

  const decrementBathtub = () => {
    const qty = quoteInfo.bathtub - 1;
    setQuoteInfo({ ...quoteInfo, bathtub: qty });
  };

  const incrementSink = () => {
    const qty = quoteInfo.sink + 1;
    setQuoteInfo({ ...quoteInfo, sink: qty });
  };

  const decrementSink = () => {
    const qty = quoteInfo.sink - 1;
    setQuoteInfo({ ...quoteInfo, sink: qty });
  };

  const incrementDishwasher = () => {
    const qty = quoteInfo.dishwasher + 1;
    setQuoteInfo({ ...quoteInfo, dishwasher: qty });
  };

  const decrementDishwasher = () => {
    const qty = quoteInfo.dishwasher - 1;
    setQuoteInfo({ ...quoteInfo, dishwasher: qty });
  };

  const incrementWashingMachine = () => {
    const qty = quoteInfo.washingmachine + 1;
    setQuoteInfo({ ...quoteInfo, washingmachine: qty });
  };

  const decrementWashingMachine = () => {
    const qty = quoteInfo.washingmachine - 1;
    setQuoteInfo({ ...quoteInfo, washingmachine: qty });
  };

  // rainShower: 0,
  // kitchenTap: 0,
  // bathtub: 0,
  // sink: 0,
  // dishwasher: 0,
  // flowRate: 0,

  return (
    <div className="max-w-6xl mx-auto my-16">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Bathroom & Kitchen Usage
      </h1>

      <p className="py-3 text-center">
        How many of these water outlets do you have in the house?
      </p>

      <div className="py-8 max-w-3xl mx-auto flex flex-col items-center md:grid  justify-center md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        <div className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/shower.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Standard Shower
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.standardShower === 0}
              onClick={decrementStandardShower}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, standardShower: e.target.value })
              }
              value={quoteInfo.standardShower}
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
            ></input>
            <button
              data-action="increment"
              onClick={incrementStandardShower}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/rainshower.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Rain Shower
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.rainShower === 0}
              onClick={decrementRainShower}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, rainShower: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.rainShower}
            ></input>
            <button
              data-action="increment"
              onClick={incrementRainShower}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/sink.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Bathroom/Kitchen Sinks
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.sink === 0}
              onClick={decrementSink}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, sink: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.sink}
            ></input>
            <button
              data-action="increment"
              onClick={incrementSink}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img className="h-16 w-16" alt="" src="/images/icons/bath.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Bathtubs</p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.bathtub === 0}
              onClick={decrementBathtub}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, bathtub: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.bathtub}
            ></input>
            <button
              data-action="increment"
              onClick={incrementBathtub}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/washingmachine.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Washing Machine
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.washingmachine === 0}
              onClick={decrementWashingMachine}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, washingmachine: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.washingmachine}
            ></input>
            <button
              data-action="increment"
              onClick={incrementWashingMachine}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="relative h-[200px] w-[250px] rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer">
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/dishwasher.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Dishwasher
          </p>
          <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
            <button
              disabled={quoteInfo.dishwasher === 0}
              onClick={decrementDishwasher}
              data-action="decrement"
              className=" bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              onChange={(e) =>
                setQuoteInfo({ ...quoteInfo, dishwasher: e.target.value })
              }
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quoteInfo.dishwasher}
            ></input>
            <button
              data-action="increment"
              onClick={incrementDishwasher}
              className="bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6">
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
      </div>
    </div>
  );
};

export default Step8;
