import { FC } from 'react'
import styles from './FavoriteMovie.moudule.scss'
const NotAuthFavorites: FC = () => {



	return (
		<div className={styles.favorites}>
			For viewing favorites plz autorize!
		</div>
	)
}

export default NotAuthFavorites
