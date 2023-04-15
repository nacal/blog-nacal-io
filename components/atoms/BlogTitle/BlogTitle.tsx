import { FC } from 'react'
import styles from './BlogTitle.module.scss'

type Props = {
  children: React.ReactNode
  viewTransitionName?: string
}

const BlogTitle: FC<Props> = ({ children, viewTransitionName }) => {
  return (
    <h2 className={styles.title} style={{ viewTransitionName: viewTransitionName }}>
      {children}
    </h2>
  )
}

export default BlogTitle
