import dayjs from 'dayjs'
import { FC } from 'react'
import styles from './BlogPostContent.module.scss'

type Props = {
  title: string
  createdAt: string
  body: string
}

const BlogPostContent: FC<Props> = ({ title, createdAt, body }) => {
  return (
    <article className={styles['post']}>
      <h2 className={styles['title']}>{title}</h2>
      <time className={styles['time']}>{dayjs(createdAt).format('YYYY-MM-DD')}</time>
      <div>{body}</div>
    </article>
  )
}
export default BlogPostContent
