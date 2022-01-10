import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react';
import { CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      //@ts-ignore
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (<>
  
    <Head>
      <title>Calculo</title>            
    </Head>
    <CssBaseline />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
