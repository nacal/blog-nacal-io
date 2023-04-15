import Link from 'next/link'
import { FC } from 'react'
import styles from './BlogPost.module.scss'
import TransitionLink from 'components/atoms/TransitionLink'

type Props = {
  id: string
  title: string
  publishedAt: string
  category: string
}

const BlogPost: FC<Props> = ({ id, title, publishedAt, category }) => {
  return (
    <TransitionLink href={`/blog/${id}`}>
      <article className={styles['post']}>
        <div className={styles['info']}>
          <time className={styles['time']}>{publishedAt}</time>
          <p className={styles['category']}>{category}</p>
        </div>
        <h2 className={styles['title']} style={{ viewTransitionName: `blog-title-${id}` }}>
          {title}
        </h2>
      </article>
    </TransitionLink>
  )
}
export default BlogPost
