/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import cookie from 'cookie';
import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { supabaseService } from '../../../utils/supabaseService';
import { supabase } from '../../../utils/supabase';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

const Leads = ({ leads }) => {
  const router = useRouter();

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/admin/leads?term=${query}`);
  };

  return (
    <Fragment>
      <Head>
        <title>Admin</title>
      </Head>
      <div className="bg-gray-100 rounded-lg shadow-xl xl:w-3/4 2xl:w-4/5 w-full px-6 sm:px-12 py-5 sm:py-10 mx-auto my-6 relative">
        <div className="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Leads
            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <form
                onSubmit={handleSubmit}
                className="flex items-center pl-3 bg-white border rounded-md border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 17.5L12.5 12.5"
                    stroke="#9CA3AF"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="py-2.5 pl-1 w-40 sm:w-64 focus:outline-none text-sm rounded-md text-gray-600 placeholder-gray-400"
                  placeholder="Search First Name"
                />
                <input type="submit" hidden />
              </form>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-20 w-full text-sm leading-none text-gray-600">
                  <th className="font-normal text-left pl-4">Date</th>
                  <th className="font-normal text-left pl-10">ID #</th>
                  <th className="font-normal text-left pl-10">Name</th>
                  <th className="font-normal text-left pl-10">Flow Rate</th>

                  <th className="font-normal text-left pl-10">Property</th>
                  <th className="font-normal text-left pl-10 w-32">Actions</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {leads.map((lead) => (
                  <Link key={lead.id} passHref href={`/admin/leads/${lead.id}`}>
                    <tr className="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-50 cursor-pointer px-4">
                      <td className="pl-4">
                        {new Date(lead.created_at).toDateString()}
                      </td>
                      <td className="pl-10">{lead.id}</td>
                      <td className="pl-10">
                        <div className="flex items-center">{`${lead.firstName} ${lead.lastName}`}</div>
                      </td>
                      <td className="pl-10">{lead.flowRate} l/min</td>

                      <td className="pl-10 uppercase text-xs">
                        {lead.houseType}
                      </td>
                      <td className="pl-10">
                        <div className="flex items-center">
                          <Link href={`/admin/leads/${lead.id}`} passHref>
                            <button className="focus:outline-none bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                              View
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </Link>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Leads;

export async function getServerSideProps(ctx) {
const supabase = createServerSupabaseClient(ctx);

const term = ctx.query.term || ''

const {
  data: { session },
} = await supabase.auth.getSession();

let { data: isAdmin } = await supabase.rpc("is_admin");
if (!isAdmin)
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };


  let { data: leads, error } = await supabaseService
    .from("quotes")
    .select("*, product_id(*)")
    .ilike("firstName", `%${term}%`)
    .order("created_at", { ascending: false });


  return {
    props: {
      leads,
    },
  };
}

