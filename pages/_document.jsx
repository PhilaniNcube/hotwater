import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../utils/gtm';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
