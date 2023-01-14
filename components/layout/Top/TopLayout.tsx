import Head from 'next/head'
import { FC, memo, ReactNode } from 'react'
import styles from './TopLayout.module.scss'
import Heading from 'components/atoms/Heading'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Head>
        <script src="https://embed.zenn.studio/js/listen-embed-event.js" async />
      </Head>
      <main className={styles['main']}>
        <Heading />
        {children}
      </main>
    </>
  )
})

export default DefaultLayout
