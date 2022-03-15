/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabase';
import Head from 'next/head';
import Banner7 from '../../components/Catalogue/Banner';
import ProductCatalogue from '../../components/Catalogue/ProductCatalogue';

const Catalogue = ({ products, error }) => {
  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Our collection of gas geysers for sale"
        />
        <meta
          name="keywords"
          content="water heaters, geysers, gas geysers, gas, instant hot water, hot water, loadshedding, save on electricity, tankless, tankless water heater"
        />
      </Head>
      <Banner7 />
      <ProductCatalogue products={products} />
    </Fragment>
  );
};

export default Catalogue;

export async function getServerSideProps({}) {
  let { data: products, error } = await supabase
    .from('products')
    .select(`*, brand_id( name)`)
    .eq('inStock', true)
    .order('brand_id', { ascending: false });

  return {
    props: {
      products,
      error,
    },
  };
}
