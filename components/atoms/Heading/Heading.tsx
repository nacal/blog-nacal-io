import { FC } from 'react'
import styles from './Heading.module.scss'

type Props = {
  isBehind?: boolean
}

const Heading: FC<Props> = ({ isBehind }) => {
  return <p className={`${styles['heading']} ${isBehind && styles['-behind']}`}>nacal.io</p>
}

export default Heading
