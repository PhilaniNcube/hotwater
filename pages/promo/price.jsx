/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import formatter from '../../lib/format';
import analytics from '../../utils/analytics';

const Price = ({ product }) => {
  console.log(product);

  const [bill, setBill] = useState(200);

  const intRate = 17.5;
  const term = 12;
  let apr = intRate / 1200;

  let repayment =
    (apr * -product.price * Math.pow(1 + apr, term)) /
    (1 - Math.pow(1 + apr, term));

  console.log('Mobi', Math.ceil(repayment));

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Save Money With Gas Geysers</title>
        <meta name="price" content={product.price} />
        <meta name="currency" content="ZAR" />
        <meta name="condition" content="New" />

        <meta name="description" content={product.description} />
        <meta
          name="image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta itemProp="name" content={product.name} />
        <meta itemProp="description" content={product.description} />

        <meta
          itemProp="image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        ></meta>

        <meta name="og:title" content={product.name} />
        <meta name="og:description" content={product.description} />
        <meta name="og:image" content={product.image} />
        <meta
          name="og:url"
          content={`https://www.hotwater24.com/catalogue/${product.id}`}
        />
        <meta name="og:site_name" content="Hotwater24" />
        <meta name="og:locale" content="en_ZA" />
        <meta name="og:type" content="product"></meta>

        <meta
          name="product:availability"
          content={product.inStock ? 'in stock' : 'out of stock'}
        />
        <meta name="product:price:currency" content="ZAR" />
        <meta name="product:price:amount" content={product.price} />
        <meta name="product:brand" content={product.brand_id.name}></meta>
      </Head>
      <main className="my-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <h1 className="text-2xl md:text-5xl text-gray-700">
              Eskom Price Hikes!!
            </h1>
            <p className="text-lg md:text-xl leading-3 mt-2 text-gray-900">
              Have you considered switching to a gas geyser? You will be
              suprised how much you could satnd to save by going for a gas
              geyser installation.
            </p>

            <p className="text-lg md:text-xl leading-3 mt-2 text-gray-900">
              Use our calculator to estimate how much you could save on
              electricity by switching to a gas geyser
            </p>

            <div className="flex flex-col mt-6 w-5/6 text-gray-600 text-sm">
              <label htmlFor="bill">
                Monthly Electricy Bill -{' '}
                <span className="font-bold text-xl">R{bill}</span>
              </label>
              <input
                type="range"
                name="bill"
                min={0}
                step={50}
                max={8000}
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </div>

            <div className="bg-sky-700 shadow rounded w-5/6 py-4 mt-2 flex justify-center items-center">
              <div className="text-center">
                <p className="text-3xl font-semibold leading-6 text-white">
                  R{bill * 0.2}
                </p>
                <p className="text-base font-medium leading-none text-white mt-4">
                  Estimated savings per month
                </p>
              </div>
            </div>

            <Link href="/quote/start" passHref>
              <button
                onClick={() => {
                  analytics.track('get_quote');
                }}
                className="bg-gray-800 mt-3 rounded-full text-white px-8 py-2 text-base font-medium"
              >
                Get A Quote
              </button>
            </Link>
          </div>
          <div className="w-full">
            <div className="justify-center">
              <img
                src={product.image}
                alt=""
                className="aspect-square h-[50vh]"
              />
            </div>

            <div className="w-full">
              <p className="text-2xl font-medium text-gray-600">
                {product.name}
              </p>
              <p className="text-lg text-gray-700 font-bold mb-8">
                {' '}
                Price: {formatter.format(product.price)}
              </p>
              <Link
                href="https://live.mobicred.co.za/web_mcrliv/run.w?run=application&merchantId=7160&returnUrl=https://www.hotwater24.com"
                passHref
              >
                <div className="flex items-center space-x-3 cursor-pointer mb-8">
                  <img
                    className="h-10 object-cover"
                    src="/images/mobicred.png"
                    alt="mobicred logo"
                  />
                  <span className="flex flex-col">
                    <p>Get it on Credit for:</p>
                    <p className="text-2xl font-bold text-gray-600">
                      {formatter.format(Math.ceil(repayment))}
                      <small className="ml-2 text-xs">incl VAT</small>
                    </p>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Price;

export async function getStaticProps() {
  let { data: products, error } = await supabase
    .from('products')
    .select('*, brand_id.name')
    .eq('id', '6026246a-587b-42b8-88be-3a265679aed6')
    .single();

  return {
    props: {
      product: products,
    },
  };
}
