/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import useCart from '../../hooks/useCart';
import formatter from '../../lib/format';

const ProductDetail = ({ product }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { addToCart } = useCart();

  console.log(product);

  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | {product.name}</title>
        <meta name="description" content={product.description} />
        <meta name="price" content={product.price} />
        <meta name="currency" content="ZAR" />
        <meta name="condition" content="New" />
      </Head>
      <Script src="https://mobicred.co.za/plugins/instalment.js"></Script>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="mt-6 w-full"
            alt="img of a girl posing"
            src={product.image}
          />
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {product.brand_id.name}
            </p>
            <h1 className="lg:text-2xl text-xl	font-semibold	lg:leading-6 leading-7 text-gray-800	mt-2">
              {product.name}
            </h1>
            <h1 className="lg:text-4xl text-2xl mt-6 mb-4 font-bold lg:leading-6 leading-7 text-sky-700">
              {formatter.format(product.price)}
              <span className="text-sm font-light pl-2">incl. VAT</span>
            </h1>

            <div id="instalmentCalc" data-amount={product.price}></div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Flow Rate</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {product.flowRate} Litres/Min
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Max Temperature</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">
                {product.maxTemp} Celsius
              </p>
              <svg
                className="cursor-pointer"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base	flex items-center	justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
          >
            Add To Cart
          </button>
          <div>
            <p className="xl:pr-16 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
              {product.description}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Product Code: {product.sku}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Width: {product.width} mm
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Height: {product.height} mm
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Depth: {product.depth} mm
            </p>
            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
              Weight: {product.weight}
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  Shipping and returns
                </p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      'transform ' + (show ? 'rotate-180' : 'rotate-0')
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
                  (show ? 'block' : 'hidden')
                }
                id="sect"
              >
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Contact us</p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      'transform ' + (show2 ? 'rotate-180' : 'rotate-0')
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  'pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ' +
                  (show2 ? 'block' : 'hidden')
                }
                id="sect"
              >
                Tel: +27 (0)79 341 4075
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
