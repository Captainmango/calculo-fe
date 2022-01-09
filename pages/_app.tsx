import type { AppProps } from 'next/app'
import 'materialize-css/dist/css/materialize.min.css'
import Head from 'next/head'

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
