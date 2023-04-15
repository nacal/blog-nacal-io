import Link from 'next/link'
import { FC } from 'react'
import markdownToHtml from 'zenn-markdown-html'
import styles from './BlogPostContent.module.scss'
import 'zenn-content-css'
import BlogTitle from 'components/atoms/BlogTitle'

type Props = {
  id: string
  title: string
  publishedAt: string
  body: string
  categoryTitle: string
  categorySlug: string
}

const BlogPostContent: FC<Props> = ({ id, title, publishedAt, body, categoryTitle, categorySlug }) => {
  const html = markdownToHtml(body, {
    embedOrigin: 'https://embed.zenn.studio',
  })

  return (
    <article className={styles['article']}>
      <div className={styles['content']}>
        <BlogTitle viewTransitionName={`blog-title-${id}`}>{title}</BlogTitle>
        <div className={styles['info']}>
          <time className={styles['time']}>{publishedAt}</time>
          <Link href={`/blog/category/${categorySlug}`}>
            <p className={styles['category']}>{categoryTitle}</p>
          </Link>
        </div>
        <div
          className={`${styles['body']} znc`}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </article>
  )
}
export default BlogPostContent
