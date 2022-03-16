import React from 'react';
import Orders from '../../../components/Admin/AdminOrders';
import { supabaseService } from '../../../utils/supabaseService';

const index = ({ orders }) => {
  return (
    <div className="my-6">
      <Orders orders={orders} />
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  let { data: orders, error } = await supabaseService
    .from('orders')
    .select('*');

  return {
    props: {
      orders,
    },
  };
}
