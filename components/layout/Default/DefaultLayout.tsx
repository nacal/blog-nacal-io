import Head from 'next/head'
import Script from 'next/script'
import { FC, memo, ReactNode } from 'react'
import styles from './DefaultLayout.module.scss'
import Heading from 'components/atoms/Heading'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js" />
      <main>
        <Heading />
        {children}
      </main>
    </>
  )
})

export default DefaultLayout
