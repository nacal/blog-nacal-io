import { ParsedUrlQuery } from 'node:querystring'
import { Entry, EntryCollection } from 'contentful'
import dayjs from 'dayjs'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import HeadContents from 'components/atoms/HeadContents'
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

const getPostEntry = async (id: string) => {
  const item: Entry<IPostFields> = await client.getEntry(id)
  return item
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getPostEntries()
  return {
    paths: items.map((item) => `/blog/${item.sys.id}`),
    fallback: false,
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const item = await getPostEntry(params!.id)
  item.fields.publishedAt = dayjs(item.fields.publishedAt).tz('Asia/Tokyo').format('YYYY-MM-DD')

  return {
    props: {
      post: item,
    },
  }
}

type Props = {
  post: Entry<IPostFields>
}

const Blog: NextPage<Props> = ({ post }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <HeadContents
          title={post.fields.title}
          description={post.fields.body}
          url={process.env.BASE_URL + decodeURI(router.asPath)}
        />
      </Head>
      <DefaultLayout>
        <BlogPostPageContainer post={post} />
      </DefaultLayout>
    </>
  )
}

export default Blog