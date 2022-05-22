import React, { Fragment, useState } from 'react';
import { supabase } from '../../../utils/supabase';
import cookie from 'cookie';

function ShortLead({ lead }) {
  console.log({ lead });

  const [receipient, setReceipient] = useState('');
  const [secondary, setSecondary] = useState('');
  const [messages, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mail = await fetch(`/api/mail/short-installers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        showers: lead.showers,
        bathtubs: lead.bathtub,
        sinks: lead.sinks,
        flowRate: lead.flowRate,
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        streetAddress: lead.streetAddress,
        suburb: lead.suburb,
        city: lead.city,
        phoneNumber: lead.phoneNumber,
        installation: lead.installation,
        messages: messages,
        receipient: receipient,
        secondary: secondary,
      }),
    });

    console.log(mail);

    if (mail.status === 200) {
      alert(`Email sent to ${receipient}`);
    }
  };

  return (
    <Fragment>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="bg-white  shadow rounded xl:flex lg:flex max-w-6xl mx-auto px-6 md:px-4 lg:px-0 my-12">
        <div className="xl:w-2/5 lg:w-2/5 bg-gray-100 py-8 border-gray-300 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-lg font-bold text-gray-900">{`${lead.firstName} ${lead.lastName}`}</p>
            <p className="mb-6 text-sm text-gray-700">{lead.email}</p>
            <div className="bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 focus:outline-none">
              Flow Rate {lead.flowRate} l/min
            </div>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 px-6 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">Date</p>
                <p className="text-sm text-gray-700">
                  {new Date(lead.created_at).toDateString()}
                </p>
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
                <p className="text-sm text-gray-700">{`${lead.streetAddress}, ${lead.suburb}, 
                ${lead.city} `}</p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">
                  Phone Number
                </p>
                <p className="text-sm text-gray-700">{lead.phoneNumber}</p>
              </div>
            </div>
            <div className="w-2/5">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 font-medium">
                  Installation
                </p>
                <p className="text-sm text-gray-700 ">
                  {lead.installation ? 'Yes' : 'No'}
                </p>
              </div>
            </div>
            <div className="w-2/5 ">
              <div className="border-b pb-3 flex justify-between">
                <span>
                  <p className="mb-2 text-sm text-gray-700 font-medium">
                    Sinks
                  </p>
                  <p className="text-sm text-gray-700 ">{lead.sinks}</p>
                </span>
                <span>
                  <p className="mb-2 text-sm text-gray-700 font-medium">
                    Bathtubs
                  </p>
                  <p className="text-sm text-gray-700 ">{lead.bathtubs}</p>
                </span>
                <span>
                  <p className="mb-2 text-sm text-gray-700 font-medium">
                    Showers
                  </p>
                  <p className="text-sm text-gray-700 ">{lead.showers}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}

      <form
        className="md:w-1/2 mx-auto px-6 bg-gray-100 py-4 rounded my-8 lg:rounded-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-lg font-bold my-4">Send message to the installer</p>
        <div className="flex flex-col ">
          <label
            htmlFor="receipient"
            className="text-gray-800  text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Email Address
          </label>
          <input
            id="receipient"
            required
            type="email"
            value={receipient}
            onChange={(e) => setReceipient(e.target.value)}
            className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
            placeholder="Placeholder"
          />

          <div className="flex flex-col mt-4">
            <label
              htmlFor="secondary"
              className="text-gray-800  text-sm font-bold leading-tight tracking-normal mb-2"
            >
              CC:Email Address
            </label>
            <input
              id="secondary"
              required
              type="email"
              value={secondary}
              onChange={(e) => setSecondary(e.target.value)}
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              placeholder="Placeholder"
            />
          </div>

          <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
            <label
              htmlFor="message"
              className="pb-2 text-sm font-bold text-gray-800"
            >
              Message
            </label>
            <textarea
              id="message"
              type="text"
              name="message"
              value={messages}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-white border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 "
              placeholder="Short Message"
              rows={5}
            />
          </div>
          <button
            disabled={loading}
            className="mt-4 bg-sky-700 text-white py-2 rounded-md"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
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
