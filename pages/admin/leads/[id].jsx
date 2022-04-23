/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import { supabase } from '../../../utils/supabase';
import QuoteCard from '../../../components/Quote/QuoteCard';
import cookie from 'cookie';
import { supabaseService } from '../../../utils/supabaseService';
import Head from 'next/head';

function Lead({ lead }) {
  console.log(lead);

  const {
    children,
    teenagers,
    adults,
    houseType,
    ownership,
    gasSupply,
    gasStove,
    gasWaterHeating,
    gasHeating,
    otherGasUse,
    locateOutside,
    gasGeyser,
    electricGeyser,
    solarGeyser,
    otherGeyser,
    standardShower,
    rainShower,
    bathtub,
    sink,
    dishwasher,
    washingmachine,
    flowRate,
    offGrid,
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    telephoneNumber,
    suburb,
    postalCode,
    completeSolution,
    product_id,
    installation,
  } = lead;

  const [receipient, setReceipient] = useState('');
  const [messages, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mail = await fetch(`/api/mail/installers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        children: children,
        teenagers: teenagers,
        adults: adults,
        houseType: houseType,
        ownership: ownership,
        gasSupply: gasSupply,
        gasStove: gasStove,
        gasWaterHeating: gasWaterHeating,
        gasHeating: gasHeating,
        otherGasUse: otherGasUse,
        locateOutside: locateOutside,
        gasGeyser: gasGeyser,
        electricGeyser: electricGeyser,
        solarGeyser: solarGeyser,
        otherGeyser: otherGeyser,
        standardShower: standardShower,
        rainShower: rainShower,
        bathtub: bathtub,
        sink: sink,
        dishwasher: dishwasher,
        washingmachine: washingmachine,
        flowRate: flowRate,
        offGrid: offGrid,
        firstName: firstName,
        lastName: lastName,
        email: email,
        streetAddress: streetAddress,
        suburb: suburb,
        city: city,
        telephoneNumber: telephoneNumber,
        postalCode: postalCode,
        completeSolution: completeSolution,
        installation: installation,
        messages: messages,
        receipient: receipient,
      }),
    });

    console.log(mail);

    if (mail.status === 200) {
      alert(`Email sent to ${receipient}`);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Admin | Lead</title>
      </Head>
      <div className="w-full bg-gray-200 py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <QuoteCard quote={lead} />
            {/* Card code block end */}
          </div>
        </div>

        <form
          className="md:w-1/2 mx-auto px-6 bg-white py-4 rounded mt-4"
          onSubmit={handleSubmit}
        >
          <p className="text-lg font-bold my-4">
            Send message to the installer
          </p>
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
              value={receipient}
              onChange={(e) => setReceipient(e.target.value)}
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
              placeholder="Placeholder"
            />

            <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
              <label
                htmlFor="message"
                className="pb-2 text-sm font-bold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={messages}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-transparent border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 "
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
