import { Entry, EntryCollection } from 'contentful'
import dayjs from 'dayjs'
import type { NextPage, GetStaticProps } from 'next'
import HeadContents from 'components/atoms/HeadContents'
import DefaultLayout from 'components/layout/Default'
import BlogPageContainer from 'components/pages/BlogPage'
import { buildClient, IPostFields } from 'lib/contentful'
import { publishRssXml } from 'lib/feed'

const client = buildClient()

export const getStaticProps: GetStaticProps = async () => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'post',
    order: '-fields.publishedAt',
  })
  publishRssXml(items, '/blog')
  items.map(
    (item: Entry<IPostFields>) =>
      (item.fields.publishedAt = dayjs(item.fields.publishedAt).tz('Asia/Tokyo').format('YYYY-MM-DD'))
  )

  return {
    props: { posts: items },
  }
}

type Props = {
  posts: Entry<IPostFields>[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <HeadContents title="blog - nacal.io" description="nacalのblog" url={process.env.BASE_URL + '/blog'} />
      <DefaultLayout>
        <BlogPageContainer posts={posts} />
      </DefaultLayout>
    </>
  )
}

export default Blog
