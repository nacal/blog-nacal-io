import Link from 'next/link'
import { FC } from 'react'
import styles from './BlogInfos.module.scss'

type Props = {
  publishedAt: string
  category: string
  viewTransitionName: string
  href?: string
}

type WrapperProps = {
  children: React.ReactNode
  href?: string
}

const BlogInfosWrapper: FC<WrapperProps> = ({ children, href }) => {
  return href ? <Link href={href}>{children}</Link> : <>{children}</>
}

const BlogInfos: FC<Props> = ({ publishedAt, category, viewTransitionName, href }) => {
  return (
    <div className={styles['info']} style={{ viewTransitionName: viewTransitionName }}>
      <time className={styles['time']}>{publishedAt}</time>
      <BlogInfosWrapper href={href}>
        <p className={styles['category']}>{category}</p>
      </BlogInfosWrapper>
    </div>
  )
}

export default BlogInfos
