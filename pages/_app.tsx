import '../styles/globals.scss'
import '../styles/reset.scss'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault('Asia/Tokyo')

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('zenn-embed-elements')
  }, [])

  return <Component {...pageProps} />
}
