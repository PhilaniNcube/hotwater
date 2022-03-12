/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';

function Index({ quote }) {
  return (
    <Fragment>
      <div className="w-full bg-gray-200 py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-white  shadow rounded">
              <div className="w-full lg:w-1/3 p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded shadow">
                    <img
                      className="w-full h-full overflow-hidden object-cover rounded"
                      src="/images/avatar.svg"
                      alt="logo"
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="text-gray-800 font-medium text-base">
                      {quote.firstName} {quote.lastName}
                    </h5>
                    <p className="text-gray-600  text-xs font-normal">
                      {quote.email}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="grid grid-cols-2 bg-sky-500 text-white px-2 py-3 rounded-t-lg">
                    <h3>Geyser</h3>
                    <h3>Installation Cost</h3>
                  </div>
                  <div className="grid grid-cols-2 bg-gray-100 px-2 py-3">
                    <p className="text-xs font-medium">11-16l/min</p>
                    <p className="text-xs font-medium">R2500 - R4600</p>
                  </div>
                  <div className="grid grid-cols-2 bg-gray-100 px-2 py-3">
                    <p className="text-xs font-medium">20l/min</p>
                    <p className="text-xs font-medium">R3500 - R6000</p>
                  </div>
                  <div className="grid grid-cols-2 bg-gray-100 px-2 py-3">
                    <p className="text-xs font-medium">24-26l/min</p>
                    <p className="text-xs font-medium">R7000 - R9000</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg">Installation</h4>
                  <div className="bg-red-500 text-white rounded mt-1 p-2">
                    <p className="text-xs">
                      For safety and quality purposes of the installation work
                      performed. We highly recommend you to only work with
                      certified installers that are registered with the LPGas
                      Association of South Africa.
                    </p>
                    <p className="text-xs">
                      Our network of certified installers will offer you the
                      best guaranteed service for all your installation needs.
                    </p>
                    <p className="text-xs">
                      It is typical for a Gas Geyser installation to have a UPS
                      as well. The price for a UPS is between R2500 – R4500 and
                      a water-resistant cover costs about R500.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                <h3 className="text-lg text-gray-800 font-bold mt-1 mb-1">
                  Address:
                </h3>
                <p className="text-gray-600  text-sm font-normal">
                  {`Street Address: ${quote.streetAddress}`}
                </p>
                <p className="text-gray-600  text-sm font-normal">
                  {`Phone Number: ${quote.telephoneNumber}`}
                </p>

                <p className="text-gray-600  text-sm font-normal">
                  {`Postal Code: ${quote.postalCode}`}
                </p>
                <div className="mt-2 mb-2 w-full bg-gray-100 rounded p-4 relative">
                  <ul>
                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Home Ownership -{' '}
                      <span className="uppercase font-bold">
                        {quote.ownership ? `Owner` : 'Renter'}
                      </span>
                    </li>
                    <li className="text-xs text-gray-600  font-normal tracking-normal my-4">
                      Porperty Type -{' '}
                      <span className="uppercase font-bold">
                        {quote.houseType}
                      </span>
                    </li>
                    <li className="text-xs text-gray-600  font-normal tracking-normal my-4">
                      Current Water Heater -{' '}
                      <span className="uppercase font-bold">
                        {quote.waterHeater}
                      </span>
                    </li>
                    <li className="text-xs text-gray-600  font-normal tracking-normal my-4">
                      Current Gas Supply -{' '}
                      <span className="uppercase font-bold">
                        {quote.gasSupply}
                      </span>
                    </li>

                    <li className="text-xs text-gray-600  font-normal tracking-normal my-4">
                      Off Grid Solution -{' '}
                      <span className="uppercase font-bold">
                        {quote.offGrid ? 'Yes' : 'No'}
                      </span>
                    </li>

                    <li className="text-xs text-gray-600  font-normal tracking-normal my-4">
                      Geyser on outside wall -{' '}
                      <span className="uppercase font-bold">
                        {quote.locateOutside ? 'Yes' : 'No'}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <h2 className="text-gray-600  font-bold text-lg leading-6 mb-1 text-center">
                      {quote.children}
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      Children
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-bold text-lg leading-6 mb-1 text-center">
                      {quote.teenagers}
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      Teenagers
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-bold text-lg leading-6 mb-1 text-center">
                      {quote.adults}
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      Adults
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  lg:w-1/3 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                    Bathubs
                  </p>
                  <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                    {quote.bathtub}
                  </p>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                    Dishwashers
                  </p>
                  <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                    {quote.dishwasher}
                  </p>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                    Rain Showers
                  </p>
                  <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                    {quote.rainShower}
                  </p>
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                    Sinks
                  </p>
                  <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                    {quote.sink}
                  </p>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                    Standard Showers
                  </p>
                  <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                    {quote.standardShower}
                  </p>
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                    Washing Machine
                  </p>
                  <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                    {quote.washingmachine}
                  </p>
                </div>

                <hr className="text-gray-900 bg-gray-200 h-1 my-4" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-800 font-normal mb-1 tracking-normal">
                      Calculated Flow Rate
                    </p>
                    <h2 className="text-sm xl:text-lg text-gray-600  font-bold tracking-normal">
                      {quote.flowRate} L/Min
                    </h2>
                  </div>
                </div>
                <h3 className="text-gray-600 font-bold text-lg mt-8">
                  Intended Gas Use:
                </h3>
                <div className="flex items-center justify-between py-4 border-t-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Cooking
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasStove ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Geyser
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasWaterHeating ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Heating
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasHeating ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>

                <h3 className="text-gray-600 font-bold text-lg mt-8">
                  Current Geyser:
                </h3>
                <div className="flex items-center justify-between py-4 border-t-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Electric
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.electricGeyser ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Solar
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.solarGeyser ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Gas
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasGeyser ? 'Yes' : 'No'}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Other
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.otherGeyser ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Index;
