import React from 'react';
import ProfileNav from '../../components/Profile/ProfileSidebar';
import QuotesTable from '../../components/Tables/QuotesTable';
import { useQuotes } from '../../hooks/quotes';
import { supabase } from '../../utils/supabase';

const MyQuotes = ({ error, serverQuotes }) => {
  const { quotes, quotesIsLoading, quotesFetching, quotesError } = useQuotes(
    serverQuotes,
  );

  return (
    <ProfileNav>
      <div className="px-6 lg:px-12 py-6">
        <h1 className="text-2xl mt-6">My Quotes</h1>
        {quotes && <QuotesTable quotes={quotes} />}
      </div>
    </ProfileNav>
  );
};

export default MyQuotes;

export async function getServerSideProps() {
  let { data: quotes, error } = await supabase.from('quotes').select('*');

  const serverQuotes = quotes;

  return {
    props: {
      serverQuotes,
      error,
    },
  };
}
