import Head from 'next/head';
import React, { Fragment } from 'react';
import AdminProducts from '../../../components/Admin/AdminProducts';
import { supabaseService } from '../../../utils/supabaseService';

const index = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className="my-6">
        <AdminProducts products={products} />
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  let { data: products, error } = await supabaseService
    .from('products')
    .select('*, brand_id(name)');

  return {
    props: {
      products,
    },
  };
}
