import { Entry, EntryCollection } from 'contentful'
import type { NextPage, GetStaticPaths } from 'next'
import DefaultLayout from 'components/layout/Default'
import BlogPostPageContainer from 'components/pages/BlogPostPage'
import { buildClient, IPostFields } from 'lib/contentful'

const client = buildClient()

const getPostEntries = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'post',
  })
  return items
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getPostEntries()
  return {
    paths: items.map((item) => `/blog/${item.sys.id}`),
    fallback: false,
  }
}

export const getStaticProps = async () => {
  const items = await getPostEntries()
  return {
    props: {
      posts: items,
    },
  }
}

type Props = {
  posts: Entry<IPostFields>[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <DefaultLayout>
      <BlogPostPageContainer post={posts[0]} />
    </DefaultLayout>
  )
}

export default Blog
