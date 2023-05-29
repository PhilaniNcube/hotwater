import React, { Fragment } from 'react';
import cookie from 'cookie';
import Cards from '../../components/Admin/AdminCards';
import { supabase } from '../../utils/supabase';
import { supabaseService } from '../../utils/supabaseService';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';

const Admin = ({ brands, products, orders, profile, quotes, shortLeads, isAdmin, news, count }) => {
  const user = useUser();

  // console.log(quotes)

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
  } else if (isAdmin) {
    return (
      <Fragment>
        <Cards
          shortLeads={shortLeads}
          products={products}
          profiles={profile}
          quotes={quotes}
          orders={orders}
          news={news}
          count={count}
        />
      </Fragment>
    );
  } else if (user?.role === 'authenticated') {
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

export async function getServerSideProps(ctx) {

const supabase = createServerSupabaseClient(ctx);



    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log({session})

    let { data:isAdmin } = await supabase.rpc("is_admin");
    if (!isAdmin)
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };



  let { data: brands } = await supabaseService.from('brands').select('*');

  let { data: orders } = await supabaseService.from('orders').select('*');

  let { data: products } = await supabaseService.from('products').select('*');

  let { data: profile } = await supabaseService.from('profile').select('*');

  let { data: quotes, count } = await supabaseService.from('quotes').select('*', { count: 'exact' });

console.log(count + ' quotes')

  let { data: news } = await supabaseService.from('news').select('*');

  let { data: leads, error } = await supabaseService.from('leads').select('*');

  return {
    props: {
      brands,
      orders,
      products,
      profile,
      quotes,
      count,
      shortLeads: leads,
      isAdmin,
      news
    },
  };
}
