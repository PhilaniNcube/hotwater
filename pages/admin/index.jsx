import React, { Fragment } from 'react';
import cookie from 'cookie';
import Cards from '../../components/Admin/AdminCards';
import AdminHeader from '../../components/Layout/AdminHeader';
import { supabase, supabaseService } from '../../utils/supabase';

const Admin = ({ brands, products, orders, profile, quotes }) => {
  return (
    <Fragment>
      <AdminHeader />
      <Cards
        brands={brands}
        products={products}
        profiles={profile}
        quotes={quotes}
        orders={orders}
      />
    </Fragment>
  );
};

export default Admin;

export async function getServerSideProps() {
  let { data: brands } = await supabase.from('brands').select('*');

  let { data: orders } = await supabase.from('orders').select('*');

  let { data: products } = await supabase.from('products').select('*');

  let { data: profile } = await supabase.from('profile').select('*');

  let { data: quotes } = await supabase.from('quotes').select('*');

  return {
    props: {
      brands,
      orders,
      products,
      profile,
      quotes,
    },
  };
}
