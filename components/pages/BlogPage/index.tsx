import { Entry } from 'contentful'
import { FC } from 'react'
import Blog from './BlogPage'
import { IPostFields } from 'lib/contentful'

type Props = {
  posts: Entry<IPostFields>[]
}

const BlogPageContainer: FC<Props> = ({ posts }) => {
  return <Blog posts={posts} />
}

export default BlogPageContainer
