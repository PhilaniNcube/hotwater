import React from 'react';
import Head from 'next/head';
import Orders from '../../../components/Admin/AdminOrders';
import cookie from 'cookie';
import { supabase } from '../../../utils/supabase';
import { supabaseService } from '../../../utils/supabaseService';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

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

export async function getServerSideProps(ctx) {
const supabase = createServerSupabaseClient(ctx);

const term = ctx.query.term || "";

const {
  data: { session },
} = await supabase.auth.getSession();

let { data: isAdmin } = await supabase.rpc("is_admin");
if (!isAdmin)
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };

  let { data: orders, error } = await supabaseService
    .from('orders')
    .select('*');

  return {
    props: {
      orders,
    },
  };
}
