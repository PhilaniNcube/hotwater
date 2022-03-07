/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../Context/AuthContext';
import { supabase } from '../utils/supabase';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useUser();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await signUp(email, password);

    alert('Please check your email address for the login link');
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="bg-indigo-50 relative">
        <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
          <div className=" md:hidden sm:mb-8 mb-6">
            <img
              className="h-12 object-cover"
              src="/images/logo-01.svg"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6 "
          >
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>

            <div className="mt-8">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {' '}
                Email{' '}
              </label>
              <input
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-labelledby="email"
                type="email"
                required
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                placeholder="e.g: john@gmail.com "
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {' '}
                Password{' '}
              </label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-labelledby="password"
                type="password"
                required
                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div className="mt-8">
              <button
                role="button"
                type="submit"
                disabled={loading}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                {loading ? 'Loading' : 'Register'}
              </button>
            </div>
          </form>
          <div className="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
            <div className="pl-8 md:block hidden">
              <img
                className="h-36 object-cover"
                src="/images/logo-01.svg"
                alt=""
              />
            </div>
            <div className="flex items-start mt-8">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
