/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cookie from 'cookie';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../../utils/supabase';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

const OrderSummary = ({ order }) => {
  console.log(order);

  return (
    <div className=" py-14 lg:px-20 md:px-6 px-4  px 2xl:container 2xl:mx-auto ">
      <div className="flex justify-center md:jusitfy-start items-center md:items-start w-full flex-col space-y-4">
        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center text-gray-800">
          My Order
        </h1>
        <p className="text-sm md:text-base text-center md:text-left leading-5 md:leading-6 text-gray-800">
          Order summary
        </p>
      </div>
      <div className="border border-gray-200 mt-9">
        <div className="flex md:justify-between md:flex-row flex-col items-center py-6 md:py-9 px-4 md:px-8 border-gray-200 border-b">
          <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2 md:space-y-4 ">
            <p className="text-base leading-4">
              Order#:{' '}
              <span className="font-medium"> {order.id.slice(0, 6)} </span>
            </p>
            <p className="text-base leading-4">
              Order Date:{' '}
              <span className="font-medium">
                {' '}
                {new Date(order.created_at).toDateString('en-ZA')}
              </span>
            </p>
          </div>
          <Link href="/orders" passHref>
            <button className="hover:bg-black   mt-4 md:mt-0 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 leading-4 px-8 py-4 text-white bg-gray-800">
              Back to orders
            </button>
          </Link>
        </div>

        {order.orderItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-start md:justify-between items-start md:items-center md:flex-row flex-col xl:py-9 px-4 py-6 md:p-6 xl:px-8 md:space-x-6 xl:space-x-8 border-b border-gray-200"
          >
            <div className="w-full md:w-52">
              <Image
                className="w-full block"
                src={item.image}
                width={400}
                height={400}
                alt={item.name}
              />
            </div>
            <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 justify-items-between items-center w-full gap-x-20 xl:gap-x-8">
              <div className="flex flex-col justify-start items-start">
                <p className="text-xl xl:text-2xl font-semibold leading-7 xl:leading-6 text-gray-800">
                  {item.name}
                </p>
                <p className="text-base leading-4 text-gray-600 mt-2 xl:mt-4">
                  By: {item.brand_id.name}
                </p>
                <div className="flex justify-start space-x-4 xl:space-x-8 items-center mt-10">
                  <p className="text-base  flex flex-shrink-0 leading-4 text-gray-600">
                    Flow Rate: {item.flowRate} l/min
                  </p>
                  <p className="text-base  flex flex-shrink-0 leading-4 text-gray-600">
                    Qty: {item.qty}
                  </p>
                  <p className="text-xl flex flex-shrink-0  font-semibold leading-5 text-gray-800">
                    Price R {item.price}
                  </p>
                </div>
              </div>
              <div className="flex  space-y-10 xl:space-y-0 xl:space-x-10 2xl:space-x-36 xl:flex-row flex-col justify-between h-full 2xl:justify-start items-start xl:items-center">
                <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4">
                  <p className="text-base leading-4 text-gray-600">
                    Dimensions
                  </p>
                  <p className="text-xl font-semibold leading-5 text-gray-600">
                    {`(w)${item.width}mm x (h)${item.height}mm x (d)${item.depth}mm`}
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4">
                  <p className="text-base leading-4 text-gray-600">Weight</p>
                  <p className="text-xl font-semibold leading-5 text-gray-600">
                    {item.weight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex md:flex-row flex-col-reverse justify-start items-center">
          <button className="flex flex-shrink-0 hover:underline focus:underline  focus:outline-none justify-center items-center space-x-2 py-8 px-4 xl:px-12 border-t md:border-t-0 w-full md:w-auto md:border-r border-gray-200">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 4L12 12"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base leading-4 text-gray-800">Order Summary</p>
          </button>
          <div className="flex justify-between md:flex-row flex-col items-center w-full px-6 xl:px-8 py-8 ">
            <p className="text-base leading-none">
              Shipping{' '}
              <span className="font-semibold">R {order.shippingCost}</span>
            </p>
            <p className="text-lg leading-none mt-6 md:mt-0 text-gray-800">
              Total Price:{' '}
              <span className="font-semibold">R {order.orderTotal}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

export async function getServerSideProps(ctx) {
const supabase = createServerSupabaseClient(ctx);

const {
  data: { session },
} = await supabase.auth.getSession();

console.log({ session });

let { data: isAdmin } = await supabase.rpc("is_admin");
if (!isAdmin)
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };

  let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', ctx.params.id)
    .single();

  return {
    props: {
      order: orders,
    },
  };
}
