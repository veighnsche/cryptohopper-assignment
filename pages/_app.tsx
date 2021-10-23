import 'tailwindcss/tailwind.css'
import '../styles/_app.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Cryptohopper</title>
      <link href="http://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet"/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
