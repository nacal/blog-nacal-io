import Link from 'next/link'
import { FC } from 'react'
import styles from './BlogPost.module.scss'
import { IPostFields } from 'lib/contentful'

type Props = {
  id: string
  title: string
  createdAt: string
}

const BlogPost: FC<Props> = ({ id, title, createdAt }) => {
  return (
    <article>
      <Link href={`/blog/${id}`}>
        <time>{createdAt}</time>
        <h2 className={styles['title']}>{title}</h2>
      </Link>
    </article>
  )
}
export default BlogPost
