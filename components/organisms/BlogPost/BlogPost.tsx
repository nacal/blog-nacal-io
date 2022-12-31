import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import styles from './BlogPost.module.scss'

type Props = {
  id: string
  title: string
  createdAt: string
}

const BlogPost: FC<Props> = ({ id, title, createdAt }) => {
  return (
    <article className={styles['post']}>
      <Link href={`/blog/${id}`}>
        <time className={styles['time']}>{dayjs(createdAt).format('YYYY-MM-DD')}</time>
        <h2 className={styles['title']}>{title}</h2>
      </Link>
    </article>
  )
}
export default BlogPost
