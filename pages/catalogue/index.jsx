/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { fetchJson } from '../../lib/requests';
import CatalogueHero from '../../components/Catalogue/CatalogueHero';
import CatalogueGrid from '../../components/Catalogue/CatalogueGrid';

const Catalogue = ({ products, flowRate }) => {
  console.log(flowRate);

  return (
    <Fragment>
      <CatalogueHero />
      <CatalogueGrid products={products.data} />
    </Fragment>
  );
};

export default Catalogue;

export async function getServerSideProps({ query: { flowRate } }) {
  const products = await fetchJson(
    `${process.env.CMS_URL}/products?populate=%2A&filters[flowRate][$gte]=${flowRate}&sort[0]=flowRate%3Adesc`,
  );

  return {
    props: {
      flowRate,
      products,
    },
  };
}
