import { FC, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './FavoriteButton.module.scss'

type Props = {
  isFavorite?: boolean
  addFavorite: () => void
  favoriteCount: number
}

const FavorieButton: FC<Props> = ({ isFavorite = false, addFavorite, favoriteCount }) => {
  const [isActive, setIsActive] = useState(isFavorite)

  const toggleButton = () => {
    setIsActive(() => !isActive)
    addFavorite()
  }

  return (
    <div className={styles['favorite']}>
      <button className={styles['button']} onClick={toggleButton}>
        <FaHeart title="faborite icon" className={`${styles['icon']} ${isActive ? styles['active'] : ''}`} />
      </button>
      <p className={styles['label']}>{favoriteCount}</p>
    </div>
  )
}

export default FavorieButton
