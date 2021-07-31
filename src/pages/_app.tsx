import type { AppProps } from 'next/app'
import Head from 'next/head'
import { setup } from 'twind'
import globalStyles from '../styles/globals.js'

setup({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Charm, cursive',
        'sans-serif': 'Roboto, sans-serif',
      },
      lineHeight: {
        loose: '3.25rem',
      },
      minHeight: {
        '1/5': '20%',
      },
    },
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Charm&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
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
