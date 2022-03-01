import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Slider from '../components/Homepage/Slider';

import { useQuotes } from '../hooks/quotes';

export default function Home() {
  const router = useRouter();

  const { quotes } = useQuotes();

  return (
    <Fragment>
      <Slider />
    </Fragment>
  );
}
