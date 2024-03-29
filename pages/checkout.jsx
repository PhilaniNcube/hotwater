import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Head from 'next/head';

import useCart from '../hooks/useCart';
import formatter from '../lib/format';
import analytics from '../utils/analytics';
import { useUser } from '@supabase/auth-helpers-react';

export default function Checkout() {
  const [loading, setLoading] = useState(false);

  const user = useUser();
  const formRef = useRef();
  console.log(formRef);
  console.log('checkout', user);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [chec, setChc] = useState('');
  const [payId, setPayId] = useState('');

  const { cart, cartTotal } = useCart();

  const shipping = 200;

  const handleSubmit = () => {
    console.log('submit', chec, payId);

    formRef.current.submit();
  };

  const intiatePayment = async () => {
    setLoading(true);

    analytics.track('begin_checkout', {
      currency: 'ZAR',
      value: cartTotal,
    });

    console.log({
      firstName,
      lastName,
      streetAddress,
      email,
      city,
      postalCode,
      cart,
      cartTotal,
      shipping,
      orderTotal: cartTotal + shipping,
    });

    if (user !== null) {
      const response = await fetch(`/api/orders/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          streetAddress,
          email,
          suburb,
          city,
          postalCode,
          cart,
          cartTotal,
          shipping,
          orderTotal: cartTotal + shipping,
          user_id: user.id,
        }),
      });

      const result = await response.json();

      const { paygateId, reqId, ref, checksum } = result;

      setChc(checksum);
      setPayId(reqId);

      console.log({ chec, payId });
      console.log(result);

      handleSubmit();

      setLoading(false);
    } else {
      const response = await fetch(`/api/orders/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          streetAddress,
          email,
          suburb,
          city,
          postalCode,
          cart,
          cartTotal,
          shipping,
          orderTotal: cartTotal + shipping,
          user_id: 'a7bf95ea-fab4-4db8-8fd3-079c7cbe71c0',
        }),
      });

      const result = await response.json();

      const { paygateId, reqId, ref, checksum } = result;

      setChc(checksum);
      setPayId(reqId);

      console.log({ chec, payId });
      console.log(result);

      handleSubmit();

      setLoading(false);
    }
  };

  return (
    <div className="overflow-y-hidden">
      <Head>
        <title>Hotwater24 | Checkout</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas geyser installation, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater, switch to a gas geyser"
        />
        <meta name="og:title" content="Hotwater24 | Checkout" />
        <meta
          name="og:description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="og:image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta name="og:url" content={`https://www.hotwater24.com/checkout`} />
        <meta name="og:site_name" content="Hotwater24" />
        <meta name="og:locale" content="en_ZA" />
        <meta name="og:type" content="home page"></meta>

        <meta name="product:price:currency" content="ZAR" />

        <link rel="canonical" href="https://www.hotwater24.com/checkout" />
      </Head>
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Checkout
              </p>
            </div>
            <div className="mt-2">
              <Link href="/cart">
                <a className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                  Back to cart
                </a>
              </Link>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Details
              </p>

              <form
                action="https://secure.paygate.co.za/payweb3/process.trans"
                method="POST"
                onSubmit={handleSubmit}
                ref={formRef}
              >
                <input type="hidden" name="PAY_REQUEST_ID" value={payId} />
                <input type="hidden" name="CHECKSUM" value={chec} />
                <input type="submit" name="sumbit" className="hidden" />
              </form>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8">
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Street Address"
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                placeholder="Suburb"
              />

              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <input
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            <button
              onClick={intiatePayment}
              disabled={loading}
              className="focus:outline-none  focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
            >
              {!loading ? ' Proceed to payment' : 'Please wait...'}
            </button>

            <div className="mt-4 flex justify-start items-center w-full">
              <Link href="/cart">
                <a className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                  Back to cart
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {cart && cart.length}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {formatter.format(cartTotal)}{' '}
                  <span className="text-xs">(incl VAT)</span>
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {formatter.format(shipping)}{' '}
                  <span className="text-xs">(incl VAT)</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Total
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                {formatter.format(cartTotal + shipping)}{' '}
                <span className="text-xs">(incl VAT)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
