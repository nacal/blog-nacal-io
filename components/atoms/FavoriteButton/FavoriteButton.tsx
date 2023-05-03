import { FC, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './FavoriteButton.module.scss'

type Props = {
  isFavorite?: boolean
  addFavorite: () => void
  removeFavorite: () => void
  favoriteCount: number
}

const FavorieButton: FC<Props> = ({ isFavorite = false, addFavorite, removeFavorite, favoriteCount }) => {
  const [isActive, setIsActive] = useState(isFavorite)

  const handleClick = () => {
    isActive ? removeFavorite() : addFavorite()
    setIsActive(() => !isActive)
  }

  return (
    <div className={styles['favorite']}>
      <button className={styles['button']} onClick={handleClick}>
        <FaHeart title="faborite icon" className={`${styles['icon']} ${isActive ? styles['active'] : ''}`} />
      </button>
      <p className={styles['label']}>{favoriteCount}</p>
    </div>
  )
}

export default FavorieButton
