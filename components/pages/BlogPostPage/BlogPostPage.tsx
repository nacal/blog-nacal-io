import { Entry } from 'contentful'
import { FC } from 'react'
import styles from './BlogPostPage.module.scss'
import BlogPostContent from 'components/organisms/BlogPostContent'
import { IPostFields } from 'lib/contentful'

type Props = {
  post: Entry<IPostFields>
}

const BlogPage: FC<Props> = ({ post }) => {
  return (
    <section className={styles['posts']}>
      <BlogPostContent title={post.fields.title} createdAt={post.sys.createdAt} body={post.fields.body} />
    </section>
  )
}

export default BlogPage
