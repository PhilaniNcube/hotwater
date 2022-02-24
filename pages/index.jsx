import { Fragment } from 'react';
import Hero from '../components/Homepage/Hero';
import OffGrid from '../components/Homepage/OffGrid';
import Savings from '../components/Homepage/Savings';
import Slider from '../components/Homepage/Slider';
import { useQuotes } from '../hooks/quotes';

export default function Home() {
  const { quotes } = useQuotes();

  console.log('quotes', quotes);

  return (
    <Fragment>
      <Slider />
    </Fragment>
  );
}
