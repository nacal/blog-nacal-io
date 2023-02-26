import { FC, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './FavoriteButton.module.scss'

type Props = {
  isFavorite?: boolean
}

const FavorieButton: FC<Props> = ({ isFavorite = false }) => {
  const [isActive, setIsActive] = useState(isFavorite)

  const toggleButton = () => {
    setIsActive(() => !isActive)
  }

  return (
    <button className={styles['button']} onClick={toggleButton}>
      <FaHeart title="faborite icon" className={`${styles['icon']} ${isActive ? styles['active'] : ''}`} />
    </button>
  )
}

export default FavorieButton
