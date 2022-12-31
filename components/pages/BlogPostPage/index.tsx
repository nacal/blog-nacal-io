import { Entry } from 'contentful'
import { FC } from 'react'
import BlogPostPage from './BlogPostPage'
import { IPostFields } from 'lib/contentful'

type Props = {
  post: Entry<IPostFields>
}

const BlogPostPageContainer: FC<Props> = ({ post }) => {
  return <BlogPostPage post={post} />
}

export default BlogPostPageContainer
