import React, { useState } from 'react';
import cookie from 'cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../../../utils/supabase';
import { supabaseService } from '../../../utils/supabaseService';

const Product = ({ product }) => {
  console.log(product);

  const router = useRouter();

  const [name, setName] = useState(product.name);
  const [inStock, setInStock] = useState(product.inStock);
  const [description, setDescription] = useState(product.description);
  const [flowRate, setFlowRate] = useState(product.flowRate);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('products')
      .update({
        name: name,
        price: price,
        description: description,
        flowRate: flowRate,
        inStock: inStock,
      })
      .eq('id', product.id);

    if (!!data) router.push(`/admin/products`);

    if (!!error) alert('There was an error updating the product');
  };

  return (
    <div className="py-8 px-6 md:px-4 lg:px-0 max-w-6xl mx-auto rounded">
      <form
        className="container mx-auto bg-slate-50 shadow-md rounded mt-4"
        onSubmit={handleSubmit}
      >
        <div className="rounded-lg">
          <div className="xl:w-full bg-gray-300   py-5">
            <div className="flex items-center w-11/12 mx-auto">
              <p className="text-lg text-gray-800 font-bold">Edit Product</p>
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <div className="container mx-auto">
              <div className="my-8 mx-auto xl:w-full xl:mx-0">
                <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="name"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                    />
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="flowRate"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Flow Rate
                    </label>
                    <input
                      type="number"
                      id="flowRate"
                      name="flowRate"
                      value={flowRate}
                      onChange={(e) => setFlowRate(e.target.value)}
                      required
                      className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                    />
                  </div>

                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="inStock"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Featured
                    </label>
                    <div className="border border-gray-300  shadow-sm rounded flex relative">
                      <select
                        type="text"
                        name="inStock"
                        required
                        value={inStock}
                        onChange={(e) => setInStock(e.target.value)}
                        id="inStock"
                        className="bg-white appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700  text-gray-800  rounded"
                      >
                        <option value={false}>Out of stock</option>
                        <option value={true}>In stock</option>
                      </select>
                      <div
                        className="px-4 flex items-center border-l border-gray-300  flex-col justify-center text-gray-500
                                      dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                      >
                        <svg
                          tabIndex={0}
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-up"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 15 12 9 18 15" />
                        </svg>
                        <svg
                          tabIndex={0}
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="price"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                      className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 "
                    />
                  </div>
                  <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                    <label
                      htmlFor="description"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="border border-gray-300  pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent resize-none text-gray-700 "
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={7}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-4 sm:px-12 px-4 bg-gray-500  mt-6 flex justify-end rounded-bl rounded-br">
            <Link href="/admin/products" passHref>
              <a className="text-sm focus:outline-none text-gray-600  py-2 px-6 mr-4 rounded bg-gray-200 transition duration-150 ease-in-out">
                Back
              </a>
            </Link>
            <button
              className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;

export async function getServerSideProps({ req, params: { sku } }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  if (user?.role !== 'supabase_admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  let { data: products } = await supabaseService
    .from('products')
    .select('*')
    .eq('sku', sku)
    .single();

  return {
    props: {
      product: products,
    },
  };
}
