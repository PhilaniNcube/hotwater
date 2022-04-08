import React from 'react';
import Head from 'next/head';
import Orders from '../../../components/Admin/AdminOrders';
import cookie from 'cookie';
import { supabase } from '../../../utils/supabase';
import { supabaseService } from '../../../utils/supabaseService';

const index = ({ orders }) => {
  return (
    <div className="my-6">
      <Head>
        <title>Orders</title>
      </Head>
      <Orders orders={orders} />
    </div>
  );
};

export default index;

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

  let { data: orders, error } = await supabaseService
    .from('orders')
    .select('*');

  return {
    props: {
      orders,
    },
  };
}
