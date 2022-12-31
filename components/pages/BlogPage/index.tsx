import { Entry } from 'contentful'
import { FC } from 'react'
import BlogPage from './BlogPage'
import { IPostFields } from 'lib/contentful'

type Props = {
  posts: Entry<IPostFields>[]
}

const BlogPageContainer: FC<Props> = ({ posts }) => {
  return <BlogPage posts={posts} />
}

export default BlogPageContainer
