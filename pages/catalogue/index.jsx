/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { fetchJson } from '../../lib/requests';
import CatalogueHero from '../../components/Catalogue/CatalogueHero';
import CatalogueGrid from '../../components/Catalogue/CatalogueGrid';
import { useProducts } from '../../hooks/products';

const Catalogue = ({ flowRate }) => {
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
      <div className="flex justify-center text-center py-4">
        <p className="text-xl font-bold">
          Based on your answers we rcommend a geyser with a minimum flow rate of{' '}
          {`${flow} Litres/minute`}
        </p>
      </div>
      {products.products.length === 0 && (
        <div className="flex justify-center text-center max-w-3xl mx-auto mt-4 bg-slate-100 shadow-lg rounded p-8">
          <p>
            We currently do not have geysers with a flow rate greater than{' '}
            {`${flow} Litres/minute`}. We will be in touch with alternative
            optiins for you
          </p>
        </div>
      )}
      {products.products.length > 0 && (
        <CatalogueGrid products={products.products} />
      )}
    </Fragment>
  );
};

export default Catalogue;

export async function getServerSideProps({ query: { flowRate = 0 } }) {
  return {
    props: {
      flowRate,
    },
  };
}
