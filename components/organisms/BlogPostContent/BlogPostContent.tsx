import Link from 'next/link'
import { FC } from 'react'
import markdownToHtml from 'zenn-markdown-html'
import styles from './BlogPostContent.module.scss'
import 'zenn-content-css'
import BlogInfos from 'components/atoms/BlogInfos'
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
        <BlogTitle type={'bold'} viewTransitionName={`blog-title-${id}`}>
          {title}
        </BlogTitle>
        <BlogInfos
          publishedAt={publishedAt}
          category={categoryTitle}
          viewTransitionName={`blog-infos-${id}`}
          href={`/blog/category/${categorySlug}`}
        />
        <div
          className={`${styles['body']} znc`}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
      <Link href="/blog" className={styles['back']}>
        記事一覧へ
      </Link>
    </article>
  )
}
export default BlogPostContent
