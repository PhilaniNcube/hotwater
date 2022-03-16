import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { useUser } from '../../Context/AuthContext';
import useCart from '../../hooks/useCart';
import formatter from '../../lib/format';

export default function ProductDetail({ product }) {
  const { user } = useUser();

  const { addToCart } = useCart();

  return (
    <Fragment>
      <div className="mt-2 max-w-6xl mx-auto">
        <div className="lg:px-20 md:px-6 px-4 md:flex items-start">
          <div className="w-[100%]  md:w-1/2 flex flex-col flex-shrink-0">
            <Image
              src={product.image}
              alt="Image of a shoe"
              className="w-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="xl:ml-32 md:ml-6 mt-5 md:w-1/2">
            <h1 className="lg:text-2xl md:text-xl text-lg font-medium lg:leading-6 md:leading-5 leading-5 text-gray-800">
              {product.name}
            </h1>

            <p className="lg:text-2xl font-medium lg:leading-6 text-lg leading-5 mt-4 text-gray-800">
              {formatter.format(product.price)}{' '}
              <span className="text-xs">incl. VAT</span>
            </p>

            <div className="grid grid-cols-2 bg-sky-600 shadow-md p-2 rounded-t mt-8">
              <p className="text-gray-100 font-medium text-xs">Brand</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.brand_id.name}
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2">
              <p className="text-gray-100 font-medium text-xs">Flow Rate</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.flowRate} litres/min
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2">
              <p className="text-gray-100 font-medium text-xs">Max Temp</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.maxTemp} &#8451;
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2">
              <p className="text-gray-100 font-medium text-xs">Width</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.width} mm
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2">
              <p className="text-gray-100 font-medium text-xs">Height</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.height} mm
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2">
              <p className="text-gray-100 font-medium text-xs">Depth</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.depth} mm
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2">
              <p className="text-gray-100 font-medium text-xs">Weight</p>
              <p className="text-gray-100 font-medium text-xs">
                {product.weight}
              </p>
            </div>
            <div className="grid grid-cols-2 mt-1 bg-sky-600 shadow-md p-2 rounded-b">
              <p className="text-gray-100 font-medium text-xs">Pressure</p>
              <p className="text-gray-100 font-medium text-xs">
                min: {product.minPressure} max: {product.maxPressure}
              </p>
            </div>

            <div className="lg:flex items-start justify-between mt-4 mb-12">
              <div className="w-full lg:mt-0 mt-4">
                {!user ? (
                  <Link href="/signin" passHref>
                    <button className="bg-gray-800 h-10 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-base leading-none text-white py-3 w-full px-2">
                      Please Sign In To Add To Cart
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gray-800 h-10 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 text-base leading-none text-white py-3 w-full px-2"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
