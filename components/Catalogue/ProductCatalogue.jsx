/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';
import formatter from '../../lib/format';
import Link from 'next/link';

export default function ProductCatalogue({ products }) {
  let arr = [
    ' text-white',
    ' text-white',
    ' text-black',
    ' text-white',
    ' text-white',
    ' text-white',
    ' text-white',
    ' text-white',
    ' text-white',
  ];

  console.log(products);

  const [stars, setStars] = useState(arr);

  const setStarsValue = (val) => {
    const newArr = [...stars];
    if (newArr[val] === ' text-white') {
      newArr[val] = ' text-black';
    } else {
      newArr[val] = ' text-white';
    }
    setStars(newArr);
  };

  return (
    <div className="mx-auto max-w-6xl my-4 md:py-6 lg:px-0 md:px-6 py-9 px-4">
      <div className="flex flex-col justify-start items-start">
        <div className="mt-1 flex justify-between items-end w-full">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <p className="text-3xl lg:text-4xl tracking-tight font-semibold lg:leading-3 leading-6 text-gray-800">
                All geysers
              </p>
            </div>
            <div className="flex justify-start items-end mb-1">
              <span className="text-base leading-none font-normal text-gray-600">
                ({products.length} Products)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-4 grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 lg:gap-x-8 lg:gap-y-8 md:gap-x-6 md:gap-y-10">
          {products.map((product) => (
            <div
              className="flex justify-center flex-col shadow-xl px-4 py-3 rounded-lg"
              key={product.id}
            >
              <div className="relative group flex justify-center items-center">
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.name}
                />
                <div>
                  <Link href={`/catalogue/${product.id}`} passHref>
                    <button className="opacity-0 group-hover:opacity-100 py-4 w-10/12 sm:w-11/12 md:w-10/12 xl:w-11/12 flex justify-center items-center bg-sky-800 absolute bottom-6 inset-x-6 sm:inset-x-3 md:inset-x-6 lg:inset-x-5 xl:inset-x-4 shadow">
                      <p className="text-base text-center font-medium leading-4 text-gray-50 flex flex-shrink-0">
                        Quick View
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-6 flex justify-between w-full">
                <div>
                  <p className="text-xl font-semibold leading-6 text-gray-800">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-base leading-none text-sky-800">
                  {product.brand_id.name}
                </p>
              </div>
              <div className="mt-6 flex justify-between w-full">
                <div>
                  <p className="text-lg font-semibold leading-normal text-gray-600">
                    {formatter.format(product.price)}{' '}
                    <span className="text-xs">incl. vat</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
