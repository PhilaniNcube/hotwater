import React, { Fragment } from 'react';
import cookie from 'cookie';
import Cards from '../../components/Admin/AdminCards';
import AdminHeader from '../../components/Layout/AdminHeader';
import { supabase } from '../../utils/supabase';
import { supabaseService } from '../../utils/supabaseService';

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

export async function getServerSideProps({ req }) {
  let { data: brands } = await supabaseService.from('brands').select('*');

  let { data: orders } = await supabaseService.from('orders').select('*');

  let { data: products } = await supabaseService.from('products').select('*');

  let { data: profile } = await supabaseService.from('profile').select('*');

  let { data: quotes } = await supabaseService.from('quotes').select('*');

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
