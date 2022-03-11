/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchJson } from '../../lib/requests';
import CatalogueHero from '../../components/Catalogue/CatalogueHero';
import CatalogueGrid from '../../components/Catalogue/CatalogueGrid';
import { useProducts } from '../../hooks/products';
import { supabase } from '../../utils/supabase';
import Head from 'next/head';

const Catalogue = ({ data, error, flow }) => {
  const router = useRouter();

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
      <CatalogueHero loading={false} />
      {data.length === 0 ? (
        <div className="text-center text-md bg-red-600 text-gray-50 my-8 max-w-xl mx-auto py-4 px-4 rounded">
          <p>
            According to your answers, you need a geyser with a flow rate of{' '}
            <span className="font-bold"> {`${flow} l/min`}</span>. We do not
            curently have geysers of that size in stock. We will contact you
            with alternatives.
          </p>
        </div>
      ) : (
        <CatalogueGrid products={data} />
      )}
    </Fragment>
  );
};

export default Catalogue;

export async function getServerSideProps({ query: { flowRate = 16 } }) {
  const flow = Math.ceil(parseFloat(flowRate));

  let { data: products, error } = await supabase
    .from('products')
    .select(`*, brand_id( name)`)
    .gte('flowRate', `${flow}`);

  return {
    props: {
      flow,
      data: products,
      error,
    },
  };
}
