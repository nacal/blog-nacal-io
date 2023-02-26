import Link from 'next/link'
import { FC } from 'react'
import markdownHtml from 'zenn-markdown-html'
import styles from './BlogPostContent.module.scss'
import FavorieButton from 'components/atoms/FavoriteButton'
import 'zenn-content-css'

type Props = {
  title: string
  publishedAt: string
  body: string
  categoryTitle: string
  categorySlug: string
  addFavorite: () => void
  favoriteCount: number
}

const BlogPostContent: FC<Props> = ({
  title,
  publishedAt,
  body,
  categoryTitle,
  categorySlug,
  addFavorite,
  favoriteCount,
}) => {
  const html = markdownHtml(body)

  return (
    <article className={styles['article']}>
      <div className={styles['content']}>
        <h2 className={styles['title']}>{title}</h2>
        <div className={styles['infos']}>
          <div className={styles['info']}>
            <time className={styles['time']}>{publishedAt}</time>
            <Link href={`/blog/category/${categorySlug}`}>
              <p className={styles['category']}>{categoryTitle}</p>
            </Link>
          </div>
          <FavorieButton addFavorite={addFavorite} favoriteCount={favoriteCount} />
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
