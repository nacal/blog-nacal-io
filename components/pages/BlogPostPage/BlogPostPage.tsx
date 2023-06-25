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
      <BlogPostContent
        id={post.sys.id}
        title={post.fields.title}
        publishedAt={post.fields.publishedAt}
        body={post.fields.body}
        categoryTitle={post.fields.category.fields.title}
        categorySlug={post.fields.category.fields.slug}
      />
    </section>
  )
}

export default BlogPage
