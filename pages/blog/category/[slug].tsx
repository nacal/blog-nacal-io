import { ParsedUrlQuery } from 'node:querystring'
import { Entry, EntryCollection } from 'contentful'
import dayjs from 'dayjs'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import HeadContents from 'components/atoms/HeadContents'
import DefaultLayout from 'components/layout/Default'
import CategoryTitle from 'components/organisms/CategoryTitle'
import BlogPageContainer from 'components/pages/BlogPage'
import { buildClient, IPostFields, ICategoryFields } from 'lib/contentful'

const client = buildClient()

const getCategoryEntries = async () => {
  const { items }: EntryCollection<ICategoryFields> = await client.getEntries({
    content_type: 'category',
  })
  return items
}

const getCategoryEntry = async (id: string) => {
  const item: Entry<ICategoryFields> = await client.getEntry(id)
  return item
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getCategoryEntries()
  return {
    paths: items.map((item) => `/blog/category/${item.fields.slug}`),
    fallback: false,
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const { items }: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'post',
    order: '-fields.publishedAt',
    'fields.category.sys.contentType.sys.id': 'category',
    'fields.category.fields.slug': params!.slug,
  })
  items.map(
    (item: Entry<IPostFields>) =>
      (item.fields.publishedAt = dayjs(item.fields.publishedAt).tz('Asia/Tokyo').format('YYYY-MM-DD'))
  )

  const category = await getCategoryEntry(items[0].fields.category.sys.id)

  return {
    props: { posts: items, category: category },
  }
}

type Props = {
  posts: Entry<IPostFields>[]
  category: Entry<ICategoryFields>
}

const Blog: NextPage<Props> = ({ posts, category }) => {
  return (
    <>
      <HeadContents
        title={`${category.fields.title}カテゴリーの記事 - nacal.io`}
        description={`${category.fields.title}カテゴリーの記事一覧ページ`}
        url={process.env.BASE_URL + `/blog/category/${category.fields.slug}`}
      />
      <DefaultLayout>
        <>
          <CategoryTitle category={category} />
          <BlogPageContainer posts={posts} />
        </>
      </DefaultLayout>
    </>
  )
}

export default Blog
