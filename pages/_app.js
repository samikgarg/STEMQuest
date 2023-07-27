import { Analytics } from '@vercel/analytics/react'
import '../styles/global.css' // or wherever your global styles are

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
