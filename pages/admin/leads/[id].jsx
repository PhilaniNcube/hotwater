/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import { supabase } from '../../../utils/supabase';
import cookie from 'cookie';
import { supabaseService } from '../../../utils/supabaseService';
import { Head } from 'next/head';

function Lead({ lead }) {
  console.log(lead);
  return (
    <Fragment>
      <Head>
        <title>Admin | Lead</title>
      </Head>
      <div className="w-full bg-gray-200 dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="mx-auto w-full p-5 lg:p-10 bg-white dark:bg-gray-800 shadow rounded">
              <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
                <h1 className="mr-12 text-xl lg:text-2xl text-gray-800 dark:text-gray-100 font-bold lg:w-1/2">
                  Lead
                </h1>
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="mt-4 lg:mt-0 mr-0 xl:mr-8 text-sm bg-indigo-100 text-indigo-700 dark:text-indigo-600 rounded font-medium py-2 w-48 flex justify-center">
                    Submitted: {new Date(lead.created_at).toDateString()}
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center">
                <div className="w-full lg:w-1/2 pr-0 lg:pr-48">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded">
                      <img
                        className="w-full h-full overflow-hidden object-cover rounded object-center"
                        src="/images/avatar.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="ml-2">
                      <h5 className="text-gray-800 dark:text-gray-100 font-medium text-base">
                        {lead.firstName} {lead.lastName}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                        Address: {lead.streetAddress}, {lead.city},{' '}
                        {lead.postalCode}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                        Email: {lead.email}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs font-normal">
                        Contact: {lead.telephoneNumber}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row mt-12 w-full items-start lg:items-center mb-8 lg:mb-0">
                    <div className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                      <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                        Gas Supply
                      </h3>
                      <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                        {lead.gasSupply}
                      </h2>
                    </div>

                    <div className="flex space-x-5">
                      <div className="flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                        <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                          Cooking
                        </h3>
                        <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                          {lead.gasStove === true ? 'Yes' : 'No'}
                        </h2>
                      </div>
                      <div className="flex lg:block flex-row-reverse items-center">
                        <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                          Heating
                        </h3>
                        <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                          {lead.gasHeating === true ? 'Yes' : 'No'}
                        </h2>
                      </div>
                      <div className="flex lg:block flex-row-reverse items-center">
                        <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                          Heating
                        </h3>
                        <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                          {lead.gasHeating === true ? 'Yes' : 'No'}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <h3 className="dark:text-gray-100 text-gray-700 my-6 block font-bold text-lg">
                    Can the geyser be located on an outside wall:{' '}
                    <span className="text-2xl ml-4">
                      {' '}
                      {lead.locateOutside === true ? 'Yes' : 'No'}
                    </span>
                  </h3>
                  <h3 className="dark:text-gray-100 text-gray-700 my-6 block font-bold text-lg">
                    Requires Installation:{' '}
                    <span className="text-2xl ml-4">
                      {' '}
                      {lead.installation === true ? 'Yes' : 'No'}
                    </span>
                  </h3>
                  <h3 className="dark:text-gray-100 text-gray-700 my-6 block font-bold text-lg">
                    Off-Grid-Solution:{' '}
                    <span className="text-2xl ml-4">
                      {' '}
                      {lead.completeSolution === true ? 'Yes' : 'No'}
                    </span>
                  </h3>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="w-full  grid grid-cols-3">
                    <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.children}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Children
                      </p>
                    </div>
                    <div className="mr-12 flex lg:block lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.teenagers}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Teenagers
                      </p>
                    </div>
                    <div className="mt-5 flex lg:block lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.adults}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Adults
                      </p>
                    </div>
                  </div>
                  <div className="w-full  grid grid-cols-3">
                    <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.standardShower}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Standard Shower
                      </p>
                    </div>
                    <div className="mr-12 flex lg:block lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.rainShower}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Rain Shower
                      </p>
                    </div>
                    <div className="mt-5 flex lg:block lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.bathtub}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Bath Tubs
                      </p>
                    </div>
                  </div>
                  <div className="w-full  grid grid-cols-3">
                    <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.sink}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Sink
                      </p>
                    </div>
                    <div className="mr-12 flex lg:block lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.dishwasher}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Dishwasher
                      </p>
                    </div>
                    <div className="mt-5 flex lg:block lg:mt-0">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl leading-6 mb-1 lg:text-center">
                        {lead.washingmachine}
                      </h2>
                      <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-sm leading-5 text-center">
                        Washing machine
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <hr className="my-4 h-1 rounded bg-gray-200" />
                <hr className="absolute top-0 h-1 w-full rounded bg-indigo-400" />
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center">
                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 items-start lg:items-center mb-8 lg:mb-0">
                  <div className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                      Flow Rate
                    </h3>
                    <h2 className="mr-2 lg:mr-0 text-gray-800 dark:text-gray-100 text-xl lg:text-2xl font-bold">
                      {lead.flowRate} l/min
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full lg:w-2/3 items-start lg:items-center mb-8 lg:mb-0">
                  <div className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                      Solar Geyser
                    </h3>
                    <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                      {lead.solarGeyser ? 'Yes' : 'No'}
                    </h2>
                  </div>
                  <div className="mr-24 flex lg:block flex-row-reverse items-center mb-4 lg:mb-0">
                    <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                      Gas Geyser
                    </h3>
                    <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                      {lead.gasGeyser === true ? 'Yes' : 'No'}
                    </h2>
                  </div>
                  <div className="flex lg:block flex-row-reverse items-center">
                    <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                      Electric Geyser
                    </h3>
                    <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                      {lead.electricGeyser ? 'Yes' : 'No'}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="relative">
                <hr className="my-4 h-1 rounded bg-gray-200" />
                <hr className="absolute top-0 h-1 w-full rounded bg-indigo-400" />
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Lead;

export async function getServerSideProps({ req, params: { id } }) {
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

  let { data: quotes, error } = await supabaseService
    .from('quotes')
    .select('*, product_id(*)')
    .order('created_at', { ascending: false })
    .eq('id', id)
    .single();

  const lead = await quotes;

  return {
    props: {
      lead,
    },
  };
}
