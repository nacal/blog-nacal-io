import { FC } from 'react'
import styles from './BlogPost.module.scss'
import BlogInfos from 'components/atoms/BlogInfos'
import BlogTitle from 'components/atoms/BlogTitle'
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
        <BlogInfos publishedAt={publishedAt} category={category} viewTransitionName={`blog-infos-${id}`} />
        <BlogTitle viewTransitionName={`blog-title-${id}`}>{title}</BlogTitle>
      </article>
    </TransitionLink>
  )
}
export default BlogPost
