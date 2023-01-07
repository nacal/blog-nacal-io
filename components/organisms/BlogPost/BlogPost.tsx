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
    <Link href={`/blog/${id}`}>
      <article className={styles['post']}>
        <time className={styles['time']}>{publishedAt}</time>
        <h2 className={styles['title']}>{title}</h2>
      </article>
    </Link>
  )
}
export default BlogPost
