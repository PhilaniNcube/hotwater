import { Fragment } from 'react';
import { useRouter } from 'next/router';
import CatalogueHero from '../Catalogue/CatalogueHero';
import CatalogueGrid from '../Catalogue/CatalogueGrid';
import { supabase } from '../../utils/supabase';
import { useProducts } from '../../hooks/products';

const Step10 = ({ data, error, flow }) => {
  const router = useRouter();

  const {
    products,
    productsIsLoading,
    productsFetching,
    productsError,
  } = useProducts(flow, data);

  console.log({
    productsFetching,
    products,
    productsIsLoading,
    productsError,
    flow,
  });

  return (
    <Fragment>
      <h2>Step 10</h2>
    </Fragment>
  );
};

export default Step10;
