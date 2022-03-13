/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useCart from '../../hooks/useCart';

const CatalogueGrid = ({ products }) => {
  const router = useRouter();

  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center gap-y-12 gap-x-16  py-12 px-4 lg:px-0">
        {products.map((product) => (
          <div className="max-w-md" key={product.id}>
            <div className="bg-gray-100 rounded-tl rounded-tr">
              <Image
                src={product.image}
                alt="bg-img"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-200  px-5 rounded-b-lg">
              <p className="w-48 text-base font-semibold leading-5 pt-4 text-gray-800">
                {product.name}
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
                    {product.brand_id.name}
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
                    {product.flowRate} Litres/Min
                  </p>
                </div>
              </div>
              <p className="pt-4 text-md font-bold leading-4 text-gray-700">
                {`R ${product.price}`}
              </p>
              <div className="flex cursor-pointer py-4">
                <button
                  onClick={() => {
                    window.dataLayer = [];
                    window.dataLayer.push({ ecommerce: null });
                    window.dataLayer.push({
                      event: 'add_to_cart',
                      ecommerce: {
                        items: [
                          {
                            item_name: product.name, // Name or ID is required.
                            item_id: product.id,
                            price: product.price,
                            item_brand: product.brand_id.name,
                            item_category: 'geyser',
                            quantity: 1,
                            currency: 'ZAR',
                          },
                        ],
                      },
                    });

                    addToCart(product);
                  }}
                  className="text-md font-bold leading-1 bg-sky-700 text-white py-1 px-4 rounded"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogueGrid;
