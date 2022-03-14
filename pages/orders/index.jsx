import React, { Fragment } from 'react';
import Link from 'next/link';
import cookie from 'cookie';
import { supabase } from '../../utils/supabase';

function Orders({ orders, page, start, end }) {
  console.log(orders);

  return (
    <Fragment>
      <div className="xl:w-3/4 2xl:w-4/5 mx-auto my-8 w-full bg-white rounded-lg shadow">
        <div className="border rounded-lg border-gray-100">
          <div className="py-4 md:py-6 pl-8">
            <p className="text-base md:text-lg lg:text-xl font-bold leading-tight text-gray-800">
              Orders
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50 h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-8">Date</th>
                  <th className="font-normal text-left px-10 lg:px-6 xl:px-0">
                    Name
                  </th>
                  <th className="font-normal text-left px-10 lg:px-6 xl:px-0">
                    Amount
                  </th>
                  <th className="font-normal text-left px-10 lg:px-6 xl:px-0">
                    Address
                  </th>
                  <th className="font-normal text-left px-10 lg:px-6 xl:px-0">
                    Postal Code
                  </th>
                  <th className="font-normal text-left px-10 lg:px-6 xl:px-0">
                    Status
                  </th>
                  <th className="font-normal text-left"></th>
                </tr>
              </thead>
              <tbody className="w-full">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100"
                  >
                    <td className="pl-8">
                      {new Date(order.created_at).toDateString('en-ZA')}
                    </td>
                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                      {`${order.firstName} ${order.lastName}`}
                      <p className="text-gray-600 font-normal mt-2 uppercase">
                        Order ID: {order.id.slice(0, 6)}
                      </p>
                    </td>
                    <td className="px-10 lg:px-6 xl:px-0">
                      R {order.orderTotal}
                    </td>
                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                      {order.city}
                      <p className="text-gray-600 font-normal mt-2">
                        {order.streetAddress}
                      </p>
                    </td>
                    <td className="px-10 lg:px-6 xl:px-0">
                      <p className="underline text-blue-500">
                        {order.postalCode}
                      </p>
                    </td>
                    <td className="px-10 lg:px-6 xl:px-0">
                      <div className="flex items-center justify-center w-20 h-6 bg-yellow-100 rounded-full">
                        <p className="text-xs leading-3 text-yellow-600">
                          Pending
                        </p>
                      </div>
                    </td>
                    <td>
                      <Link href={`/orders/${order.id}`} passHref>
                        <button className="flex items-center justify-center px-4 py-3 w-32 h-9 bg-indigo-50 hover:bg-indigo-100 rounded focus:outline-none">
                          <p className="text-sm leading-none text-indigo-700">
                            View Order
                          </p>
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Orders;

export async function getServerSideProps({ req, query: { page = 1 } }) {
  const PER_PAGE = 20;

  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const end = start + PER_PAGE;

  const { user } = await supabase.auth.api.getUserByCookie(req);
  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  let { data: orders, error } = await supabase
    .from('orders')
    .select('*')
    .range(start, end)
    .order('created_at', { ascending: false });

  return {
    props: {
      orders,
      page: +page,
      start,
      end,
    },
  };
}
