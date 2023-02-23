import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import QuoteCard from '../../../components/Quote/QuoteCard';
import ProfileNav from '../../../components/Profile/ProfileSidebar';


import { supabase } from '../../../utils/supabase';
import cookie from 'cookie';

import RecommendedProducts from '../../../components/Catalogue/RecommededProducts';
import { useUser } from '@supabase/auth-helpers-react';

const Quote = ({ data, quote }) => {
  console.log({ data, quote });

  const router = useRouter();

  const  user  = useUser();

  return (
    <ProfileNav>
      <div className="md:p-6">
        {!quote ? (
          <div className="flex w-full min-h-[60vh] h-full justify-center items-center">
            <p className="font-bold text-2xl">Loading...</p>
          </div>
        ) : (
          <QuoteCard key={quote.id} quote={quote} />
        )}

        {!quote.product_id && (
          <RecommendedProducts products={data} quote={quote} />
        )}
      </div>
    </ProfileNav>
  );
};

export default Quote;

export async function getServerSideProps({
  req,
  query: { flowRate = 16 },
  params: { id },
}) {
  const flow = Math.ceil(parseFloat(flowRate));

  const { user } = await supabase.auth.api.getUserByCookie(req);

  const token = cookie.parse(req.headers.cookie)['sb:token'];

  supabase.auth.session = () => ({ access_token: token });

  const { data: quote } = await supabase
    .from('quotes')
    .select(`*, product_id(name, price, installationCost)`)
    .eq('id', id)
    .single();

  let { data: products, error } = await supabase
    .from('products')
    .select(`*, brand_id( name)`)
    .gte('flowRate', `${flow}`);

  return {
    props: {
      flow,
      data: products,
      error,
      quote,
    },
  };
}
