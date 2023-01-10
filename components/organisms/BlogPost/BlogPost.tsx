import Link from 'next/link'
import { FC } from 'react'
import styles from './BlogPost.module.scss'

type Props = {
  id: string
  title: string
  publishedAt: string
  category: string
}

const BlogPost: FC<Props> = ({ id, title, publishedAt, category }) => {
  return (
    <Link href={`/blog/${id}`}>
      <article className={styles['post']}>
        <div className={styles['info']}>
          <time className={styles['time']}>{publishedAt}</time>
          <p className={styles['category']}>{category}</p>
        </div>
        <h2 className={styles['title']}>{title}</h2>
      </article>
    </Link>
  )
}
export default BlogPost
