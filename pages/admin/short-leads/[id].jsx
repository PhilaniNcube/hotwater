import React, { Fragment } from 'react';
import { supabase } from '../../../utils/supabase';
import cookie from 'cookie';

function ShortLead({ lead }) {
  console.log({ lead });

  return (
    <Fragment>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="bg-white  shadow rounded xl:flex lg:flex max-w-6xl mx-auto px-6 md:px-4 lg:px-0 my-12">
        <div className="xl:w-2/5 lg:w-2/5 bg-gray-100 py-8 border-gray-300 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-lg font-bold text-gray-900">Shane Doe</p>
            <p className="mb-6 text-sm text-gray-700">shane@awesomeness.com</p>
            <button className="bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 focus:outline-none">
              Send Message
            </button>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 px-6 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">
                  Birthday
                </p>
                <p className="text-sm text-gray-700">29 Jan, 1982</p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">Gender</p>
                <p className="text-sm text-gray-700">Male</p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">
                  Location
                </p>
                <p className="text-sm text-gray-700">California, USA</p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">
                  Phone Number
                </p>
                <p className="text-sm text-gray-700">202-555-0191</p>
              </div>
            </div>
            <div className="w-2/5">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">
                  Last Login
                </p>
                <p className="text-sm text-gray-700 ">Today</p>
              </div>
            </div>
            <div className="w-2/5">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">Status</p>
                <p className="text-sm text-gray-700 ">Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </Fragment>
  );
}
export default ShortLead;

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

  let { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .eq('id', id)
    .single();

  return {
    props: {
      lead: leads,
    },
  };
}
