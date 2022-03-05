import Image from 'next/image';
import React, { Fragment, useState } from 'react';

export default function ProductDetail({ product }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Select Size');

  return (
    <Fragment>
      <div className="mt-4 max-w-6xl mx-auto">
        <div className="lg:px-20 md:px-6 px-4 md:flex items-start">
          <div
            className="w-[100%]  md:w-1/2 flex flex-col flex-shrink-0"
            layoutId={product.id}
          >
            <Image
              src={product.image}
              alt="Image of a shoe"
              className="w-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="xl:ml-32 md:ml-6 md:mt-0 mt-10 md:w-1/2">
            <h1 className="lg:text-2xl md:text-xl text-lg font-medium lg:leading-6 md:leading-5 leading-5 text-gray-800">
              {product.name}
            </h1>
            <p className="text-sm leading-normal text-gray-600 mt-4">
              Brand: {product.brand_id.name}
            </p>
            <p className="text-sm leading-normal text-gray-600 mt-1">
              Flow Rate: {product.flowRate} Litres/Min
            </p>
            <p className="lg:text-2xl font-medium lg:leading-6 text-lg leading-5 mt-8 text-gray-800">
              R {product.price}
            </p>

            <div className="lg:flex items-start justify-between mt-12">
              <div className="w-full lg:mt-0 mt-4">
                <button className="bg-gray-800 h-10 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-base leading-none text-white py-3 w-full px-2">
                  Add to cart
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="lg:text-xl md:text-xl text-lg font-medium lg:leading-6 md:leading-5 leading-5 text-gray-800">
                Geyser Installation Costs
              </h1>
              <p className="text-md font-medium lg:leading-6 text-lg leading-5 text-gray-800">
                R {product.installationCost}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
