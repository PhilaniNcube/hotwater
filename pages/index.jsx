import { Fragment } from 'react';
import OffGrid from '../components/Homepage/OffGrid';
import Savings from '../components/Homepage/Savings';

export default function Home() {
  return (
    <Fragment>
      <OffGrid />
      <Savings />
    </Fragment>
  );
}
