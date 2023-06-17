import { FC } from 'react'
import styles from './FavoriteMovie.module.scss'
const NotAuthFavorites: FC = () => {



	return (
		<div className={styles.auth}>
			For viewing favorites plz autorize!
		</div>
	)
}

export default NotAuthFavorites
