import Spline from '@splinetool/react-spline'
import { FC, memo, ReactNode } from 'react'
import styles from './DefaultLayout.module.scss'
import Heading from 'components/atoms/Heading'

type Props = {
  children: ReactNode
}

const DefaultLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <main className={styles['main']}>
        <Heading />
        <Spline scene="https://prod.spline.design/E7QFjnk3egxvGUGL/scene.splinecode" className={styles['spline']} />
        {children}
      </main>
    </>
  )
})

export default DefaultLayout
