import Document, { Main, NextScript } from 'next/document';
import { Body, Footer, Head, Loading, Scripts } from '../components';

export default class CustomDocument extends Document {
  render() {
    return <html>
      <Head />
      <Body>
        <Loading />
        <Main />
        <Footer />
        <NextScript />
        <Scripts />
      </Body>
    </html>
  }
};