import { Entry } from 'contentful'
import { FC } from 'react'
import BlogPostPage from './BlogPostPage'
import { IPostFields } from 'lib/contentful'

type Props = {
  post: Entry<IPostFields>
  addFavorite: () => void
  favoriteCount: number
}

const BlogPostPageContainer: FC<Props> = ({ post, addFavorite, favoriteCount }) => {
  return <BlogPostPage post={post} addFavorite={addFavorite} favoriteCount={favoriteCount} />
}

export default BlogPostPageContainer
