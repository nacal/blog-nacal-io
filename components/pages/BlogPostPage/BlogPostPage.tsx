import { Entry } from 'contentful'
import { FC } from 'react'
import styles from './BlogPostPage.module.scss'
import BlogPostContent from 'components/organisms/BlogPostContent'
import { IPostFields } from 'lib/contentful'

type Props = {
  post: Entry<IPostFields>
  addFavorite: () => void
  favoriteCount: number
}

const BlogPage: FC<Props> = ({ post, addFavorite, favoriteCount }) => {
  return (
    <section className={styles['posts']}>
      <BlogPostContent
        title={post.fields.title}
        publishedAt={post.fields.publishedAt}
        body={post.fields.body}
        categoryTitle={post.fields.category.fields.title}
        categorySlug={post.fields.category.fields.slug}
        addFavorite={addFavorite}
        favoriteCount={favoriteCount}
      />
    </section>
  )
}

export default BlogPage
