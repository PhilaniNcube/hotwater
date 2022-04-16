import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import { supabase } from '../utils/supabase';
import axios from 'axios';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Alert = ({ flag, setFlag }) => {
  return (
    <div className="max-w-5xl">
      {/* Code block starts */}
      <div
        className={
          flag
            ? 'absolute top-0 mt-12 w-full bg-green-400 shadow mb-8'
            : 'absolute top-0 mt-12 w-full bg-green-400 shadow mb-8 translate-hide'
        }
      >
        <div className="container mx-auto xl:w-full lg:transition duration-150 ease-in-out w-11/12">
          <div className="w-full xl:flex lg:flex py-6 items-center">
            <div className="xl:w-5/6 lg:w-5/6 w-full flex xl:flex-row lg:flex-row flex-col justify-center items-center xl:justify-start lg:justify-start">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                  />
                </svg>
              </div>
              <p className="mx-4 text-lg text-white text-center sm:text-left">
                Your submission was successful. Please check your inbox for our
                email.
              </p>
            </div>
            <div className="w-2/12 flex justify-end">
              <div
                onClick={() => setFlag(false)}
                className="cursor-pointer xl:relative lg:relative absolute top-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Code block ends */}
      <style>
        {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
      </style>
    </div>
  );
};

const GetIt = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [flag, setFlag] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bathtubs, setBathtubs] = useState(0);
  const [sinks, setSinks] = useState(0);
  const [showers, setShowers] = useState(0);
  const [installation, setInstallation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log({
      installation,
      showers,
      sinks,
      bathtubs,
      phoneNumber,
      email,
      lastName,
      firstName,
    });

    const { data, error } = await supabase.from('leads').insert([
      {
        installation: installation,
        showers: parseInt(showers),
        phoneNumber: phoneNumber,
        email: email,
        lastName: lastName,
        firstName: firstName,
        sinks: parseInt(sinks),
        bathtubs: parseInt(bathtubs),
      },
    ]);

    if (data) {
      setFlag(true);
    }

    const mail = await fetch('/api/mail/short-lead', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date: Date.now(),
        installation: installation,
        showers: parseInt(showers),
        sinks: parseInt(sinks),
        bathtubs: parseInt(bathtubs),
        phoneNumber: phoneNumber,
        email: email,
        lastName: lastName,
        firstName: firstName,
      }),
    });

    const response = await mail;
    setLoading(false)
  };

  return (
    <Fragment>
      <Head>
        <title>Get A Gas Geyser | Hotwater24</title>
        <meta
          name="description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas geyser installation, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater, switch to a gas geyser"
        />
        <meta name="og:title" content="Hotwater24" />
        <meta
          name="og:description"
          content="The online platform to assist and advise you on the most cost-effective and efficient gas water heating solution for your household."
        />
        <meta
          name="og:image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta name="og:url" content={`https://www.hotwater24.com`} />
        <meta name="og:site_name" content="Hotwater24" />
        <meta name="og:locale" content="en_ZA" />
        <meta name="og:type" content="get gas geyser information"></meta>

        <link rel="canonical" href="https://www.hotwater24.com/get-it" />
      </Head>

      <div className="max-w-6xl mx-auto py-12 relative">
        {flag && <Alert flag={flag} setFlag={setFlag} />}
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 gap-6">
          <div className="text-gray-700">
            <h1 className="text-2xl  font-extrabold leading-5">
              Did you know a Gas Geyser Can Save you up to 20% on your monthly
              electricity bill?
            </h1>

            <h2 className="text-lg  font-sans leading-5 mt-4">
              The trick is knowing which gas geyser to get. This is where we
              come in.
            </h2>
            <h2 className="text-lg  font-sans leading-5 mt-4">
              Fill in the next form and we can recommend the most suitable gas
              geyser for your situation. Whether your property is a family home
              or even a bed and breakfast with many bedrooms. We can design a
              solution that will ensure that you will always have hot water and
              can get significant savings on your electricity bill
            </h2>
          </div>
          <div className="shadow-lg rounded-md bg-gray-200 px-4">
            <h2 className="text-lg  font-sans leading-5 mt-4">
              Please complete this form and we will be in touch.
            </h2>
            <form className="my-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
                <div className="flex flex-col  ">
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex flex-col  ">
                  <label
                    htmlFor="lastName"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
                <div className="flex flex-col  ">
                  <label
                    htmlFor="email"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col  ">
                  <label
                    htmlFor="phoneNumber"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-4">
                <div className="flex flex-col  ">
                  <label
                    htmlFor="bathtubs"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    Bathtubs
                  </label>
                  <input
                    type="number"
                    id="bathtubs"
                    name="bathtubs"
                    value={bathtubs}
                    onChange={(e) => setBathtubs(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  />
                </div>
                <div className="flex flex-col  ">
                  <label
                    htmlFor="showers"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    Showers
                  </label>
                  <input
                    type="number"
                    id="showers"
                    name="showers"
                    value={showers}
                    onChange={(e) => setShowers(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  />
                </div>
                <div className="flex flex-col  ">
                  <label
                    htmlFor="sinks"
                    className="text-gray-700 text-sm font-bold leading-tight tracking-normal mb-2"
                  >
                    Sinks
                  </label>
                  <input
                    type="number"
                    id="sinks"
                    name="sinks"
                    value={sinks}
                    onChange={(e) => setSinks(e.target.value)}
                    required
                    className="text-gray-600 focus:outline-none focus:border focus:border-sky-700 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  />
                </div>
              </div>

              <div className="flex justify-start space-x-4 items-center">
                <p className="text-sm text-gray-700">
                  Do you require installation as well?
                </p>
                <div className="cursor-pointer my-5 rounded-full bg-gray-200 relative shadow-sm">
                  <input
                    type="checkbox"
                    checked={installation}
                    onChange={(e) => setInstallation(e.target.checked)}
                    name="toggle"
                    id="toggle1"
                    className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                  />
                  <label
                    htmlFor="toggle1"
                    className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  />
                </div>
                <style>
                  {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
                </style>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="my-2 bg-sky-700 transition duration-150 ease-in-out rounded  px-12 py-2 text-base font-medium text-white hover:bg-sky-900"
              >
                {loading ? 'Loading' : 'Save'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GetIt;
