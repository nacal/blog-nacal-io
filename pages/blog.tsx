import { Entry, EntryCollection } from 'contentful'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import DefaultLayout from 'components/layout/Default'
import BlogPageContainer from 'components/pages/BlogPage'
import { buildClient, IPostFields } from 'lib/contentful'

const client = buildClient()

export const getStaticProps: GetStaticProps = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'post',
    order: '-sys.createdAt',
  })
  return {
    props: { posts: items },
  }
}

type Props = {
  posts: Entry<IPostFields>[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <DefaultLayout>
      <BlogPageContainer posts={posts} />
    </DefaultLayout>
  )
}

export default Blog