import React from 'react';
import type { AppProps } from 'next/app';
import { Head } from '@/app/Head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default App;
