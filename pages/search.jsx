import React, { Fragment } from 'react';
import ProductGrid from '../components/Catalogue/ProductGrid';
import { supabase } from '../utils/supabase';

const search = ({ products }) => {
  return (
    <Fragment>
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
