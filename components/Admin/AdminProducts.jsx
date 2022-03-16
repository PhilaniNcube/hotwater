/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import formatter from '../../lib/format';

function AdminProducts({ products }) {
  const [show, setShow] = useState(null);
  return (
    <Fragment>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Products
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-sky-700 hover:bg-sky-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  New Product
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-bold text-left pl-4">Name</th>
                <th className="font-bold text-left pl-12">Brand</th>
                <th className="font-bold text-left pl-12">Price</th>
                <th className="font-bold text-left pl-20">In Stock</th>
                <th className="font-bold text-left pl-20">Flow Rate</th>
                <th className="font-bold text-left pl-16">Featured</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100"
                >
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10">
                        <img className="w-full h-full" src={product.image} />
                      </div>
                      <div className="pl-4">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {product.sku}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="text-sm font-medium leading-none text-gray-800">
                      {product.brand_id.name}
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">
                      {formatter.format(product.price)}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">
                      {product.inStock ? 'In stock' : 'Out Of Stock'}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">{product.flowRate} litres/min</p>
                    <p className="text-xs leading-3 text-gray-600 mt-2">
                      Max Temp: {product.maxTemp} &#8451;
                    </p>
                  </td>
                  <td className="pl-16">
                    <p className="font-medium">
                      {product.featured ? 'featured' : 'not featured'}{' '}
                    </p>
                  </td>
                  <td className="px-7 2xl:px-0">
                    <Link href={`/admin/products/${product.id}`} passHref>
                      <button className="bg-sky-700 text-white text-xs px-6 py-2 rounded shadow">
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminProducts;
