import { FC } from 'react'
import styles from './CategoryTitle.module.scss'
import 'zenn-content-css'

type Props = {
  title: string
}

const CategoryTitle: FC<Props> = ({ title }) => {
  return (
    <h1 className={styles['title']}>
      {title}
      <span className={styles['category']}>Category</span>
    </h1>
  )
}
export default CategoryTitle
