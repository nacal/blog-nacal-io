import { FC } from 'react'
import styles from './Heading.module.scss'

type Props = {
  isBehind?: boolean
}

const Heading: FC<Props> = ({ isBehind }) => {
  return <h1 className={`${styles['heading']} ${isBehind && styles['-behind']}`}>nacal.io</h1>
}

export default Heading
