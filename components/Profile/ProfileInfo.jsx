import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

import { supabase } from '../../utils/supabase';

const ProfileInfo = ({ profile }) => {
  let form = useRef(null);

  const router = useRouter();

  const  user  = useUser();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('profile')
      .update({
        firstName: firstName,
        lastName: lastName,
        city: city,
        streetAddress: streetAddress,
        phoneNumber: phoneNumber,
      })
      .eq('user_id', user.id);

    console.log({ data, error });

    router.push('/');
  };

  return (
    <div className="mt-8">
      <div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="container mx-auto bg-white shadow rounded"
        >
          <div>
            <div className="xl:w-full border-b border-gray-400 bg-gray-800 rounded-t py-5">
              <div className="flex items-center w-11/12 mx-auto">
                <p className="text-lg text-white font-bold">
                  Update Profile Info
                </p>
                <div className="ml-2 cursor-pointer text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="container mx-auto">
                <div className="my-8 mx-auto xl:w-full xl:mx-0">
                  <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="firstName"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="firstName"
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-sky-700 text-gray-800 "
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="lastName"
                        className="pb-2 text-sm font-bold text-gray-800 "
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
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-sky-700 text-gray-800 "
                      />
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="phoneNumber"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-transparent text-gray-800  focus:outline-none focus:border focus:border-sky-700 font-normal py-3 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                          placeholder="081 100 3333"
                        />
                      </div>
                    </div>
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="city"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        City
                      </label>
                      <div className="relative">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full bg-transparent text-gray-800  focus:outline-none focus:border focus:border-sky-700 font-normal py-3 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                        />
                      </div>
                    </div>
                    <div className="xl:w-3/5 lg:w-3/5 md:w-4/5 flex flex-col mb-6">
                      <label
                        htmlFor="streetAddress"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        required
                        className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-sky-700 text-gray-800 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 mt-6 flex justify-end rounded-bl rounded-br">
              <button
                className="bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-800 rounded text-white font-medium px-8 py-2 text-sm focus:outline-none"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProfileInfo;
