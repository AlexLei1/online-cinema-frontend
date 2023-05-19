import { FC } from 'react'
import MoviesContainer from './MoviesContainer/MoviesContainer'
import styles from './Sidebar.module.scss'

interface ISidebar {
	isShow: boolean
}



const Sidebar: FC<ISidebar> = ({isShow}) => {
	return (
		<div hidden={isShow} className={styles.sidebar}>
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
