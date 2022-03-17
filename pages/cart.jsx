/* eslint-disable @next/next/no-img-element */
import useCart from '../hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';
import formatter from '../lib/format';
import { format } from 'crypto-js';

export default function Cart({}) {
  const {
    cart,
    removeItemFromCart,
    addCartQty,
    reduceCartQty,
    cartTotal,
  } = useCart();

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            Cart
          </h1>
          <p className="text-base text-gray-600 mt-4">{cart.length} Items</p>
        </div>

        {cart.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-strech mt-10 md:mt-14 lg:mt-16"
            >
              <div>
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt="A pair of gray sneakers"
                  role="img"
                  className="block"
                />
              </div>
              <div className="md:flex hidden w-full justify-between">
                <div className="flex flex-col justify-center md:ml-6 lg:ml-8">
                  <p className="text-sm text-gray-800">{item.sku}</p>
                  <h2 className="mt-1 text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="mt-4 text-sm leading-tight text-gray-600 md:w-8/12 lg:w-10/12">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm leading-tight text-gray-600 md:w-8/12 lg:w-10/12">
                    Brand:{item.brand_id.name}
                  </p>
                  <p className="text-sm leading-tight text-gray-600 ">
                    Flow Rate:{item.flowRate}l/min
                  </p>
                  <p className="text-sm leading-tight text-gray-600 ">
                    Max Temp: {item.maxTemp} &#8451;
                  </p>
                  <p className="text-sm leading-tight text-gray-600 ">
                    Max Pressure: {item.maxPressure}
                  </p>
                  <p className="text-sm leading-tight text-gray-600 ">
                    Width: {item.width} mm
                  </p>
                  <p className="text-sm leading-tight text-gray-600 ">
                    Height: {item.height} mm
                  </p>
                  <p className="text-sm leading-tight text-gray-600 ">
                    Depth: {item.depth} mm
                  </p>

                  <div className="mt-8 flex space-x-6 items-center justify-between w-[500px]">
                    <a
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black cursor-pointer"
                    >
                      Remove
                    </a>

                    <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={() => reduceCartQty(item)}
                        aria-label="decrease quantity"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4L6 8L10 12"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <p className="quantity1 text-base text-gray-800">
                        {item.qty}
                      </p>
                      <button
                        onClick={() => addCartQty(item)}
                        aria-label="increase quantity"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 4L10 8L6 12"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex md:flex-col h-full lg:flex-row lg:space-x-72">
                    <div className="hidden md:block">
                      <p className="mt-24 lg:mt-0 text-xl font-medium text-gray-800 text-right">
                        {formatter.format(item.price * item.qty)}{' '}
                        <span className="text-xs">incl VAT</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:hidden mt-4">
                <p className="mt-4 text-sm leading-tight text-gray-600 md:w-8/12 lg:w-10/12">
                  Brand:{item.brand_id.name}
                </p>
                <p className="text-sm leading-tight text-gray-600 ">
                  Flow Rate:{item.flowRate}l/min
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-800">{item.sku}</p>
                    <h2 className="mt-1 text-xl font-semibold leading-tight text-gray-800">
                      {item.name}
                    </h2>
                  </div>
                  <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                    <button
                      onClick={() => reduceCartQty(item)}
                      aria-label="decrease quantity"
                      className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 4L6 8L10 12"
                          stroke="#1F2937"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <p className="quantity1 text-base text-gray-800">
                      {item.qty}
                    </p>
                    <button
                      onClick={() => addCartQty(item)}
                      aria-label="increase quantity"
                      className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="#1F2937"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-8 flex space-x-6 items-center">
                  <a
                    onClick={() => removeItemFromCart(item.id)}
                    className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black cursor-pointer"
                  >
                    Remove
                  </a>
                </div>
                <p className="mt-10 text-xl font-medium text-gray-800">
                  {formatter.format(item.price * item.qty)}{' '}
                  <span className="text-xs">incl VAT</span>
                </p>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center flex-col-reverse md:flex-row md:justify-end mt-16 md:mt-36 lg:mt-40 md:space-x-6 w-full">
          <Link href="/catalogue">
            <a className="w-full md:w-3/12 lg:w-auto flex items-center space-x-2 mt-4 md:mt-10 justify-center focus:outline-none focus:ring-2 focus:ring-gray-600">
              <div className="mt-0.5 md:mt-1">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12L9 16"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12L9 8"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base font-medium underline text-gray-600 hover:text-gray-900 cursor-pointer">
                Continue shopping
              </p>
            </a>
          </Link>
          <div className="w-full md:w-9/12 lg:w-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl text-gray-800">Total</h3>
              <p className="text-2xl font-semibold text-gray-800">
                {formatter.format(cartTotal)}
              </p>
            </div>
            <Link href="/checkout" passHref>
              <button className="w-full mt-4 bg-gray-800 hover:bg-gray-900 text-base font-medium leading-none text-white py-5 lg:px-28 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
