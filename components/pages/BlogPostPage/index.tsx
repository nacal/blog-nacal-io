import { Entry } from 'contentful'
import { FC } from 'react'
import BlogPostPage from './BlogPostPage'
import { IPostFields } from 'lib/contentful'

type Props = {
  post: Entry<IPostFields>
  addFavorite: () => void
  removeFavorite: () => void
  favoriteCount: number
}

const BlogPostPageContainer: FC<Props> = ({ post, addFavorite, removeFavorite, favoriteCount }) => {
  return (
    <BlogPostPage post={post} addFavorite={addFavorite} removeFavorite={removeFavorite} favoriteCount={favoriteCount} />
  )
}

export default BlogPostPageContainer
