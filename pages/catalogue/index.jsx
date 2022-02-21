/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { fetchJson } from '../../lib/requests';
import CatalogueHero from '../../components/Catalogue/CatalogueHero';
import CatalogueGrid from '../../components/Catalogue/CatalogueGrid';
import { useProducts } from '../../hooks/products';

const Catalogue = ({ flowRate = 0 }) => {
  const flow = Math.ceil(flowRate);

  const {
    products,
    productsIsLoading,
    productsFetching,
    productsError,
  } = useProducts(flow);

  console.log({
    productsFetching,
    products,
    productsIsLoading,
    productsError,
    flow,
  });

  return (
    <Fragment>
      <CatalogueHero />
    </Fragment>
  );
};

export default Catalogue;
