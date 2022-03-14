import React, { Fragment } from 'react';
import cookie from 'cookie';
import Cards from '../../components/Admin/AdminCards';
import AdminHeader from '../../components/Layout/AdminHeader';
import { supabase } from '../../utils/supabase';

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
  const { user } = await supabase.auth.api.getUserByCookie(req);
  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  let { data: brands } = await supabase.from('brands').select('id');

  let { data: orders } = await supabase.from('orders').select('id');

  let { data: products } = await supabase.from('products').select('id');

  let { data: profile } = await supabase.from('profile').select('id');

  let { data: quotes } = await supabase.from('quotes').select('id');

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
