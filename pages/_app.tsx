import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <ChakraProvider>
      <Head>
        <title>Calculo</title>
        <link rel="shortcut icon" href="favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
  )
}

export default MyApp
