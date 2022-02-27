import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Hero from '../components/Homepage/Hero';
import OffGrid from '../components/Homepage/OffGrid';
import Savings from '../components/Homepage/Savings';
import Slider from '../components/Homepage/Slider';
import { useQuotes } from '../hooks/quotes';
import { useUser } from '../hooks/user';

export default function Home() {
  const user = useUser();

  const router = useRouter();

  const { quotes } = useQuotes();

  return (
    <Fragment>
      <Slider />
    </Fragment>
  );
}
