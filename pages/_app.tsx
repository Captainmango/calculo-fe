import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
  
    <Head>
      <title>Calculo</title>            
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
