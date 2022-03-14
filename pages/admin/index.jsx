import React, { Fragment } from 'react';
import cookie from 'cookie';
import Cards from '../../components/Admin/AdminCards';
import AdminHeader from '../../components/Layout/AdminHeader';
import { supabase, supabaseService } from '../../utils/supabase';

const Admin = ({ brands, products, orders, profiles, quotes }) => {
  return (
    <Fragment>
      <AdminHeader />
      <Cards
        brands={brands}
        products={products}
        profiles={profiles}
        quotes={quotes}
        orders={orders}
      />
    </Fragment>
  );
};

export default Admin;

export async function getServerSideProps({ req }) {
  let { data: brands } = await supabaseService.from('brands').select('id');

  let { data: orders } = await supabaseService.from('orders').select('id');

  let { data: products } = await supabaseService.from('products').select('id');

  let { data: profile } = await supabaseService.from('profile').select('id');

  let { data: quotes } = await supabaseService.from('quotes').select('id');

  return {
    props: {
      brands,
      orders,
      products,
      profiles: profile,
      quotes,
    },
  };
}
