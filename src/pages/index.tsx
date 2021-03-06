import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Card, SkeletonCard } from 'components/common'
import { createClient } from 'libs/contentful'

const Home: NextPage = () => {
  const [posts, setPosts] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      const client = createClient()
      try {
        const res = await client
          .getEntries({
            content_type: 'blogPost',
            order: '-sys.createdAt',
          })
          .catch((error: unknown) => {
            return error
          })
        console.log('res', res.items)
        setPosts(res.items)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>blog.nacal.io</title>
        <meta name='description' content='blog.nacal.io' />
      </Head>

      <div className='my-16 mx-auto sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 justify-items-center'>
          {!posts
            ? Array(4)
                .fill('')
                .map((val, index: number) => <SkeletonCard key={index} />)
            : posts.map((post: any) => (
                <Card
                  key={post.sys.id}
                  title={post.fields.title}
                  category={post.fields.category.fields.name}
                  publishedAt={post.fields.publishedAt.substr(0, 10)}
                  slug={post.sys.id}
                />
              ))}
        </div>
      </div>
    </>
  )
}

export default Home
