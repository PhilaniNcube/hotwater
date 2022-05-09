import React, { Fragment } from 'react';
import cookie from 'cookie';
import Cards from '../../components/Admin/AdminCards';
import AdminHeader from '../../components/Layout/AdminHeader';
import { supabase } from '../../utils/supabase';
import { supabaseService } from '../../utils/supabaseService';
import { useUser } from '../../Context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Admin = ({ brands, products, orders, profile, quotes, shortLeads }) => {
  const { user } = useUser();

  const router = useRouter();

  if (user === null) {
    return (
      <Fragment>
        <Head>
          <title>Admin</title>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <div className="h-[70vh] w-screen flex flex-col justify-center items-center">
          <h1 className="text-red-500">UnAuthorized Route</h1>
          <Link href="/" passHref>
            <button className="px-6 py-2 rounded bg-sky-600 text-white">
              Home
            </button>
          </Link>
        </div>
      </Fragment>
    );
  } else if (user.role === 'supabase_admin') {
    return (
      <Fragment>
        <Cards
          shortLeads={shortLeads}
          products={products}
          profiles={profile}
          quotes={quotes}
          orders={orders}
        />
      </Fragment>
    );
  } else if (user.role === 'authenticated') {
    return (
      <Fragment>
        <div className="h-screen w-screen flex justify-center items-center">
          <h1 className="text-red-500">UnAuthorized Route</h1>
          <Link href="/" passHref>
            <button className="px-6 py-2 rounded bg-sky-600 text-white">
              Home
            </button>
          </Link>
        </div>
      </Fragment>
    );
  }
};

export default Admin;

export async function getServerSideProps({ req }) {
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

  let { data: brands } = await supabaseService.from('brands').select('*');

  let { data: orders } = await supabaseService.from('orders').select('*');

  let { data: products } = await supabaseService.from('products').select('*');

  let { data: profile } = await supabaseService.from('profile').select('*');

  let { data: quotes } = await supabaseService.from('quotes').select('*');

  let { data: leads, error } = await supabaseService.from('leads').select('*');

  return {
    props: {
      brands,
      orders,
      products,
      profile,
      quotes,
      shortLeads: leads,
    },
  };
}
