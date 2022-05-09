import React, { Fragment } from 'react';
import cookie from 'cookie';
import { supabaseService } from '../../../utils/supabaseService';
import { supabase } from '../../../utils/supabase';

const index = ({ leads }) => {
  return (
    <Fragment>
      <div className="sm:px-6 w-full my-8">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Short Leads
            </p>
          </div>
        </div>
        <div className="bg-white px-4 md:px-8 xl:px-10 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-20 w-full text-sm leading-none text-gray-600">
                <th className="font-normal text-left pl-11">Name</th>
                <th className="font-normal text-left pl-10">Flow Rate</th>
                <th className="font-normal text-left">Created</th>
                <th className="font-normal text-left">Address</th>
                <th className="font-normal text-left">Installation</th>
                <th className="font-normal text-left w-32">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="h-20 text-sm  leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="pl-11 ">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <span>{`${lead.firstName} ${lead.lastName}`}</span>
                        <p className="text-xs text-slate-500">{lead.email}</p>
                        <p className="text-xs text-slate-500">
                          {lead.phoneNumber}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mr-16 pl-10">{lead.flowRate} l/min</p>
                    <p className="mr-16 pl-10">Showers: {lead.showers}</p>
                    <p className="mr-16 pl-10">Sinks: {lead.sinks}</p>
                  </td>
                  <td>
                    <p className="mr-16">
                      {new Date(lead.created_at).toDateString()}
                    </p>
                  </td>
                  <td>
                    <p className="mr-16 flex flex-col">
                      <span>{lead.city}</span>
                      <span>{lead.streetAddress}</span>
                      <span>{lead.suburb}</span>
                    </p>
                  </td>
                  <td>
                    {lead.installation ? (
                      <div className="w-20 h-6 flex items-center mr-16 justify-center bg-green-100 rounded-full">
                        <p className="text-xs leading-3 text-blue-500">Yes</p>
                      </div>
                    ) : (
                      <div className="w-20 h-6 flex items-center mr-16 justify-center bg-red-200 rounded-full">
                        <p className="text-xs leading-3 text-slate-700">No</p>
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="flex items-center">
                      <button className="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500 focus:outline-none">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default index;

export async function getServerSideProps({ req, query: { term = '' } }) {
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

  let { data: leads, error } = await supabaseService
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  return {
    props: {
      leads,
    },
  };
}
