import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'
import styles from './indexPage.module.scss'
import TransitionLink from 'components/atoms/TransitionLink'

const IndexPage = () => {
  return (
    <>
      <div className={styles['contents']}>
        <ul className={styles['list']}>
          <li className={styles['disable']}>Profile</li>
          <li>
            <TransitionLink href="/blog">Blog</TransitionLink>
          </li>
          <li className={styles['disable']}>Photos</li>
          <li className={styles['disable']}>Development</li>
        </ul>
        <div className={styles['items']}>
          <div className={styles['links']}>
            <a href="https://github.com/nacal" className={styles['icon']}>
              <FaGithubSquare title="GitHub icon" />
            </a>
            <a href="https://twitter.com/_nacal" className={styles['icon']}>
              <FaTwitterSquare title="Twitter icon" />
            </a>
          </div>
          <h2 className={styles['copy']}>Under development.</h2>
          <address className={styles['address']}>
            <a href="mailto:nacal.dev@gmail.com">nacal.dev@gmail.com</a>
          </address>
        </div>
      </div>
    </>
  )
}

export default IndexPage
