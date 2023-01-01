import Link from 'next/link'
import { FC } from 'react'
import styles from './BlogPost.module.scss'

type Props = {
  id: string
  title: string
  publishedAt: string
}

const BlogPost: FC<Props> = ({ id, title, publishedAt }) => {
  return (
    <article className={styles['post']}>
      <Link href={`/blog/${id}`}>
        <time className={styles['time']}>{publishedAt}</time>
        <h2 className={styles['title']}>{title}</h2>
      </Link>
    </article>
  )
}
export default BlogPost
