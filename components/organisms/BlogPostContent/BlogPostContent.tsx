import Link from 'next/link'
import { FC } from 'react'
import markdownHtml from 'zenn-markdown-html'
import styles from './BlogPostContent.module.scss'
import 'zenn-content-css'

type Props = {
  title: string
  publishedAt: string
  body: string
  categoryTitle: string
  categorySlug: string
}

const BlogPostContent: FC<Props> = ({ title, publishedAt, body, categoryTitle, categorySlug }) => {
  const html = markdownHtml(body)

  return (
    <article className={styles['article']}>
      <div className={styles['content']}>
        <h2 className={styles['title']}>{title}</h2>
        <div className={styles['info']}>
          <time className={styles['time']}>{publishedAt}</time>
          <Link href={`/blog/category/${categorySlug}`}>
            <p className={styles['category']}>{categoryTitle}</p>
          </Link>
        </div>
        <div
          className={`${styles['body']} znc`}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </article>
  )
}
export default BlogPostContent
