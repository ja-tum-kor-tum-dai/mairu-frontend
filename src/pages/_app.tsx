import type { AppProps } from 'next/app'
import Head from 'next/head'
import { setup } from 'twind'
import globalStyles from '../styles/globals.js'

setup({
  theme: {
    extend: {
      fontFamily: {
        cursive: 'Charm, cursive',
        sans: 'Sarabun, sans-serif',
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
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#fec6ff" />
        <meta name="theme-color" content="#fec6ff" />

        <title>ถามคำถาม – ไม่รู้</title>
        <meta name="title" content="ถามคำถาม – ไม่รู้" />
        <meta
          name="description"
          content="อยากถามอะไรดี ? อยากรู้เรื่องอะไร ? ไม่รู้ให้ถาม​ ถามเลย!!! "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mairu.vercel.app/" />
        <meta property="og:title" content="ถามคำถาม – ไม่รู้" />
        <meta
          property="og:description"
          content="อยากถามอะไรดี ? อยากรู้เรื่องอะไร ? ไม่รู้ให้ถาม​ ถามเลย!!! "
        />
        <meta
          property="og:image"
          content="https://mairu.vercel.app/images/cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mairu.vercel.app/" />
        <meta property="twitter:title" content="ถามคำถาม – ไม่รู้" />
        <meta
          property="twitter:description"
          content="อยากถามอะไรดี ? อยากรู้เรื่องอะไร ? ไม่รู้ให้ถาม​ ถามเลย!!! "
        />
        <meta
          property="twitter:image"
          content="https://mairu.vercel.app/images/cover.png"
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
