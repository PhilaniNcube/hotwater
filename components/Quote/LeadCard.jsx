/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import { AiFillCheckSquare, AiFillCloseSquare } from 'react-icons/ai';

function LeadCard({ quote }) {
  return (
    <Fragment>
      <div className="w-full bg-gray-200 py-4">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto w-full bg-white shadow rounded">
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

                <div className="flex items-center justify-between mt-8">
                  <div>
                    <p className="text-md text-gray-600 font-bold mb-1 tracking-normal">
                      Date Submitted
                    </p>
                    <h2 className="text-sm xl:text-lg text-gray-600  font-bold tracking-normal">
                      {new Date(quote.created_at).toDateString()}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div>
                    <p className="text-md text-gray-600 font-bold mb-1 tracking-normal">
                      Calculated Flow Rate
                    </p>
                    <h2 className="text-sm xl:text-lg text-gray-600  font-bold tracking-normal">
                      {quote.flowRate} L/Min
                    </h2>
                  </div>
                </div>

                <div className="mt-4">
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
                      Kitchen Sinks
                    </p>
                    <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                      {quote.kitchenSink}
                    </p>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-gray-600  text-sm font-normal leading-3 tracking-normal">
                      Bathroom Sinks
                    </p>
                    <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                      {quote.bathroomSink}
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
                      Standard Showers
                    </p>
                    <p className="text-xs text-sky-700  font-normal leading-3 tracking-normal">
                      {quote.standardShower}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-6 border-t border-b lg:border-t-0 lg:border-b-0 sm:border-l sm:border-r border-gray-300">
                <h3 className="text-lg text-gray-600 font-bold mt-1 mb-1">
                  Address:
                </h3>
                <p className="text-gray-600  text-sm font-normal">
                  {`Street Address: ${quote.streetAddress}`}
                </p>
                <p className="text-gray-600  text-sm font-normal">
                  {`Suburb: ${quote.suburb}`}
                </p>
                <p className="text-gray-600  text-sm font-normal">
                  {`Postal Code: ${quote.postalCode}`}
                </p>
                <p className="text-gray-600  text-sm font-normal">
                  {`City: ${quote.city}`}
                </p>
                <p className="text-gray-600  text-sm font-normal">
                  {`Phone Number: ${quote.telephoneNumber}`}
                </p>
                <span className="text-gray-50 mb-2 font-medium bg-sky-800 px-4 py-1 flex space-x-8 mt-3 text-sm">
                  <p>{`Contact Day: ${quote.contactDay}`}</p>{' '}
                  <p>{`Contact Time: ${quote.contactTime}`}</p>
                </span>

                <div className="mt-2 mb-2 bg-gray-100 shadow rounded p-4 relative">
                  <ul>
                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Home Ownership -{' '}
                      <span className="uppercase font-bold">
                        {quote.ownership ? `Owner` : 'Renter'}
                      </span>
                    </li>
                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Porperty Type -{' '}
                      <span className="uppercase font-bold">
                        {quote.houseType}
                      </span>
                    </li>

                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Current Gas Supply -{' '}
                      <span className="uppercase font-bold">
                        {quote.gasSupply}
                      </span>
                    </li>

                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Off Grid Solution -{' '}
                      <span className="uppercase font-bold">
                        {quote.completeSolution ? 'Yes' : 'No'}
                      </span>
                    </li>

                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Geyser on outside wall -{' '}
                      <span className="uppercase font-bold">
                        {quote.locateOutside ? 'Yes' : 'No'}
                      </span>
                    </li>

                    <li className="text-xs text-gray-600  font-normal tracking-normal">
                      Require Installation -{' '}
                      <span className="uppercase font-bold">
                        {quote.installation ? 'Yes' : 'No'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full  lg:w-1/3 px-6 pt-4">
                <h3 className="text-gray-600 font-bold text-lg">
                  Household Size:
                </h3>
                <div className="flex items-center border-t-2 justify-between py-2">
                  <div>
                    <h2 className="text-gray-800  leading-5 text-center">
                      Children
                    </h2>
                    <h2 className="text-gray-600  font-bold text-lg leading-6 mb-1 text-center">
                      {quote.children}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-gray-800  leading-5 text-center">
                      Teenagers
                    </h2>
                    <h2 className="text-gray-600  font-bold text-lg leading-6 mb-1 text-center">
                      {quote.teenagers}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-gray-800  leading-5 text-center">
                      Adults
                    </h2>
                    <h2 className="text-gray-600  font-bold text-lg leading-6 mb-1 text-center">
                      {quote.adults}
                    </h2>
                  </div>
                </div>

                <h3 className="text-gray-600 font-bold text-lg">
                  Intended Gas Use:
                </h3>
                <div className="flex items-center justify-between py-4 border-t-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Cooking
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasStove ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Water
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasWaterHeating ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Heating
                    </h2>
                    <div className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasHeating ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className="text-gray-600 font-bold text-lg">
                  Current Geyser:
                </h3>
                <div className="flex items-center justify-between py-4 border-t-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Electric
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.electricGeyser ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Solar
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.solarGeyser ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Gas
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.gasGeyser ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-gray-600  font-medium leading-6 mb-1 text-center">
                      Other
                    </h2>
                    <p className="text-gray-800 text-sm leading-5 text-center">
                      {quote.otherGeyser ? (
                        <span className="text-lg bg-green-700 text-white">
                          <AiFillCheckSquare className="text-lg bg-green-700 text-white" />
                        </span>
                      ) : (
                        <span className="text-lg text-white bg-red-500">
                          <AiFillCloseSquare className="text-lg text-white bg-red-500" />
                        </span>
                      )}
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
export default LeadCard;
