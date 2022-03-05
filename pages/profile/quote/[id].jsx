import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import CatalogueGrid from '../../../components/Catalogue/CatalogueGrid';
import QuoteCard from '../../../components/Quote/QuoteCard';
import ProfileNav from '../../../components/Profile/ProfileSidebar';
import { useUser } from '../../../Context/AuthContext';

import { supabase } from '../../../utils/supabase';
import cookie from 'cookie';
import axios from 'axios';

const Quote = ({ data, quote }) => {
  console.log({ data, quote });

  const router = useRouter();

  const { user } = useUser();

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

        <CatalogueGrid products={data} />
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
    .select('*')
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
