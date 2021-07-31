import type { AppProps } from 'next/app'
import Head from 'next/head'
import { setup } from 'twind'
import globalStyles from '../styles/globals.js'

setup({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Charm, cursive',
      },
      lineHeight: {
        loose: '2.5',
      },
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Charm&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>
        {globalStyles}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
