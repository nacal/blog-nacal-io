import { FC } from 'react'
import styles from './BlogTitle.module.scss'

type Props = {
  children: React.ReactNode
  type?: 'bold'
  viewTransitionName?: string
}

const BlogTitle: FC<Props> = ({ children, type, viewTransitionName }) => {
  return (
    <h2 className={`${styles.title} ${type && styles.bold}`} style={{ viewTransitionName: viewTransitionName }}>
      {children}
    </h2>
  )
}

export default BlogTitle
