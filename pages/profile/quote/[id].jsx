import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import CatalogueGrid from '../../../components/Catalogue/CatalogueGrid';
import QuoteCard from '../../../components/Quote/QuoteCard';
import ProfileNav from '../../../components/Profile/ProfileSidebar';
import { useUser } from '../../../Context/AuthContext';
import { useProducts } from '../../../hooks/products';
import { useQuote } from '../../../hooks/quotes';
import { supabase } from '../../../utils/supabase';

const Quote = ({ data }) => {
  console.log({ data });

  const router = useRouter();

  const { user } = useUser();

  const { quote, quoteIsLoading, quoteFetching, quoteError } = useQuote(
    router.query.id,
  );

  console.log({ quote, quoteIsLoading, quoteFetching, quoteError });

  return (
    <ProfileNav>
      <div className="md:p-6">
        {quoteIsLoading && (
          <div className="flex w-full min-h-[60vh] h-full justify-center items-center">
            <p className="font-bold text-2xl">Loading...</p>
          </div>
        )}

        {quote?.quote.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}

        <CatalogueGrid products={data} />
      </div>
    </ProfileNav>
  );
};

export default Quote;

export async function getServerSideProps({ query: { flowRate = 16 } }) {
  const flow = Math.ceil(parseFloat(flowRate));

  let { data: products, error } = await supabase
    .from('products')
    .select(`*, brand_id( name)`)
    .gte('flowRate', `${flow}`);

  return {
    props: {
      flow,
      data: products,
      error,
    },
  };
}
