import Head from 'next/head';
import React, { Fragment } from 'react';
import ProductDetail from '../../components/Catalogue/ProductDetail';
import { supabase } from '../../utils/supabase';

const Product = ({ product }) => {
  console.log(product);

  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | {product.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Gas Geyser, save money on electricity with a gas geyser"
        />
        <meta name="price" content={product.price} />
        <meta name="sku" content={product.sku} />
      </Head>
      <ProductDetail product={product} />
    </Fragment>
  );
};

export default Product;

export async function getServerSideProps({ params: id }) {
  console.log(id);

  let { data: products, error } = await supabase
    .from('products')
    .select(`*, brand_id( name)`)
    .eq('id', `${id.id}`);

  console.log(error);

  return {
    props: {
      product: products[0],
    },
  };
}
