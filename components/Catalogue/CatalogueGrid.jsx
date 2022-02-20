/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CatalogueGrid = ({ products }) => {
  console.log(products);

  return (
    <div className="max-w-6xl mx-auto my-4">
      <div className="flex items-center justify-around flex-wrap w-full h-full py-12 px-4">
        {products.map((product) => (
          <div className="max-w-xs" key={product.id}>
            <div className="bg-gray-100 shadow rounded-tl rounded-tr">
              <img
                src={product.attributes.image.data.attributes.formats.small.url}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-200  px-5 rounded-b-lg">
              <p className="w-48 text-base font-semibold leading-5 pt-4 text-gray-800">
                {product.attributes.title}
              </p>
              <div className="flex items-center pt-2">
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-calendar-event"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#4338CA"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={4} y={5} width={16} height={16} rx={2} />
                      <line x1={16} y1={3} x2={16} y2={7} />
                      <line x1={8} y1={3} x2={8} y2={7} />
                      <line x1={4} y1={11} x2={20} y2={11} />
                      <rect x={8} y={15} width={2} height={2} />
                    </svg>
                  </div>
                  <p className="text-xs leading-3 text-indigo-700 pl-1">
                    {product.attributes.brand.data.attributes.name}
                  </p>
                </div>
                <div className="flex items-center pl-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-clock"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#4338CA"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx={12} cy={12} r={9} />
                      <polyline points="12 7 12 12 15 15" />
                    </svg>
                  </div>
                  <p className="text-xs leading-3 text-indigo-700 pl-1">
                    {product.attributes.flowRate} Litres/Min
                  </p>
                </div>
                <div className="flex items-center pl-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-cloud"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#4338CA"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                    </svg>
                  </div>
                  <p className="text-xs leading-3 text-indigo-700 pl-1">
                    {product.attributes.sku}
                  </p>
                </div>
              </div>
              <p className="pt-4 text-md font-bold leading-4 text-gray-700">
                {`R ${product.attributes.price}`}
              </p>
              <div className="flex cursor-pointer py-4">
                <p className="text-xs leading-1 text-indigo-700 pr-1">
                  Read more
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 icon icon-tabler icon-tabler-arrow-narrow-right"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#4338CA"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <line x1={15} y1={16} x2={19} y2={12} />
                  <line x1={15} y1={8} x2={19} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogueGrid;
