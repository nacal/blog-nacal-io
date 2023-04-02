import Script from 'next/script'
import { FC, memo, ReactNode } from 'react'
import styles from './ArticleLayout.module.scss'
import Heading from 'components/atoms/Heading'

type Props = {
  children: ReactNode
}

const ArticleLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js" />
      <main>
        <Heading isBehind={true} />
        {children}
      </main>
    </>
  )
})

export default ArticleLayout
