import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'


interface INavigation {
	isShow: boolean
}

const Navigation: FC<INavigation> = ({isShow}) => {
	return ( 
		<>
			{ !isShow 
				? <div className={styles.navigation}>
						<MenuContainer />
					</div>
				: null
			}
		</>
	)
}

export default Navigation
