import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = extendTheme({
  fonts: {
  }
})

function MyApp({ Component, pageProps }: AppProps) {

  return (<>
    <ChakraProvider theme={theme}>
      <Head>
        <title>Calculo</title>
        <link rel="shortcut icon" href="favicon.svg" />
      </Head>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
  )
}

export default MyApp
