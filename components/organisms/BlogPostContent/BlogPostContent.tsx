import { FC } from 'react'
import markdownHtml from 'zenn-markdown-html'
import styles from './BlogPostContent.module.scss'
import 'zenn-content-css'

type Props = {
  title: string
  publishedAt: string
  body: string
  category: string
}

const BlogPostContent: FC<Props> = ({ title, publishedAt, body, category }) => {
  const html = markdownHtml(body)

  return (
    <article className={styles['article']}>
      <div className={styles['content']}>
        <h2 className={styles['title']}>{title}</h2>
        <div className={styles['info']}>
          <time className={styles['time']}>{publishedAt}</time>
          <p className={styles['category']}>{category}</p>
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
