import { Entry } from 'contentful'
import { FC } from 'react'
import styles from './BlogPage.module.scss'
import BlogPost from 'components/organisms/BlogPost'
import { IPostFields } from 'lib/contentful'

type Props = {
  posts: Entry<IPostFields>[]
}

const BlogPage: FC<Props> = ({ posts }) => {
  return (
    <section className={styles['posts']}>
      {posts.map((post: Entry<IPostFields>) => (
        <BlogPost id={post.sys.id} title={post.fields.title} createdAt={post.sys.createdAt} key={post.sys.id} />
      ))}
    </section>
  )
}

export default BlogPage
