import { FC } from 'react'
import MoviesContainer from './MoviesContainer/MoviesContainer'
import styles from './Sidebar.module.scss'

interface ISidebar {
	isShow: boolean
}

const Sidebar: FC<ISidebar> = ({isShow}) => {
	return (
		<>
			{ !isShow 
				? <div hidden={isShow} className={styles.sidebar}><MoviesContainer /></div>
				: null
			}
		</>
	)
}

export default Sidebar
