import dayjs from 'dayjs'
import { FC } from 'react'
import markdownHtml from 'zenn-markdown-html'
import styles from './BlogPostContent.module.scss'
import 'zenn-content-css'

type Props = {
  title: string
  createdAt: string
  body: string
}

const BlogPostContent: FC<Props> = ({ title, createdAt, body }) => {
  const html = markdownHtml(body)

  return (
    <article className={styles['article']}>
      <div className={styles['content']}>
        <h2 className={styles['title']}>{title}</h2>
        <time className={styles['time']}>{dayjs(createdAt).format('YYYY-MM-DD')}</time>
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
