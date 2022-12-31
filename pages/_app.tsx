import '../styles/globals.scss'
import '../styles/reset.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('zenn-embed-elements')
  }, [])

  return <Component {...pageProps} />
}
