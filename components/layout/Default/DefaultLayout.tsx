import Head from 'next/head'
import { FC, memo, ReactNode } from 'react'
import styles from './DefaultLayout.module.scss'
import Heading from 'components/atoms/Heading'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line */}
        <script src="https://embed.zenn.studio/js/listen-embed-event.js" />
      </Head>
      <main>
        <Heading />
        {children}
      </main>
    </>
  )
})

export default DefaultLayout
