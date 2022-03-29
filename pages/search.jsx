import React, { Fragment } from 'react';
import Head from 'next/head';
import ProductGrid from '../components/Catalogue/ProductGrid';
import { supabase } from '../utils/supabase';

const search = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Search for a gas geyser" />
        <meta name="keywords" content="search, look for a gas geyser" />
        <link rel="canonical" href="https://www.hotwater24.com/search" />
      </Head>
      <ProductGrid products={products} />
    </Fragment>
  );
};

export default search;

export async function getServerSideProps({ query }) {
  console.log(query.query);

  let { data: products, error } = await supabase
    .from('products')
    .select('*')
    .ilike('description', `%${query.query}%`);

  console.log({ products, error });

  return {
    props: {
      products,
    },
  };
}
