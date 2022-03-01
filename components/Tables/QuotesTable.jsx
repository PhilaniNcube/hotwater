import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { useUser } from '../../Context/AuthContext';
import { supabase } from '../../utils/supabase';

export default function QuotesTable({ quotes }) {
  console.log('quotes', quotes);

  const router = useRouter();
  const { user } = useUser();

  const deleteQuote = async (quoteId) => {
    const { data, error } = await supabase
      .from('quotes')
      .delete()
      .eq('id', quoteId);
  };

  return (
    <Fragment>
      <div className="py-12">
        <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
          <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-8 text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Date
                  </th>
                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Time
                  </th>
                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Status
                  </th>
                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Ownership
                  </th>
                  <th className="text-gray-600 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Phone Number
                  </th>

                  <th className="pr-8">
                    <button className="w-32  bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-gray-800 px-5 py-1 text-sm cursor-default">
                      Quote
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotes &&
                  quotes.map((quote) => (
                    <tr
                      key={quote.id}
                      className="h-24 border-gray-300  border-t border-b hover:border-indigo-300 hover:shadow-md cursor-pointer transition duration-150 ease-in-out"
                    >
                      <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {new Date(quote.created_at).toDateString()}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {new Date(quote.created_at).toLocaleTimeString('en-ZA')}
                      </td>
                      <td className="pr-6">
                        <div className="w-full flex justify-start items-center h-full">
                          <div className="bg-indigo-200 text-indigo-700 rounded-full text-sm leading-3 py-2 px-5">
                            New
                          </div>
                        </div>
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {quote.ownership === true ? 'Owner' : 'Renter'}
                      </td>
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        +27 {quote.telephoneNumber}
                      </td>

                      <td className="pr-8 text-right">
                        <button
                          onClick={() => deleteQuote(quote.id)}
                          className="bg-gray-200 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm"
                        >
                          Delete
                        </button>
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
