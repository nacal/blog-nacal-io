import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'
import styles from './indexPage.module.scss'

const IndexPage = () => {
  return (
    <>
      <main>
        <div className={styles['contents']}>
          <div>
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
      </main>
    </>
  )
}

export default IndexPage
