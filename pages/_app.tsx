import '../styles/globals.scss'
import '../styles/reset.scss'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useTransitionRouterPush from 'hooks/useTransitionRouterPush'

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault('Asia/Tokyo')

export default function App({ Component, pageProps }: AppProps) {
  const { routerPushWithTransition } = useTransitionRouterPush()
  const router = useRouter()

  useEffect(() => {
    import('zenn-embed-elements')
  }, [])

  useEffect(() => {
    router.beforePopState(({ as }) => {
      routerPushWithTransition(as)
      return false
    })
  }, [router, routerPushWithTransition])

  return <Component {...pageProps} />
}
