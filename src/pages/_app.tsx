import type { AppProps } from 'next/app'
import Head from 'next/head'
import { setup } from 'twind'

setup({
  theme: {
    extend: {
      fontFamily: {
        sans: 'Charm, cursive',
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
