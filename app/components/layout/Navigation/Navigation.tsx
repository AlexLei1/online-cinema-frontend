import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'
import cn from 'classnames';

interface INavigation {
	isShow: boolean
}

const Navigation: FC<INavigation> = ({isShow}) => {
	
	return (
		<div hidden={isShow} className={cn(styles.navigation)}>
			<MenuContainer />
		</div>
	)
}

export default Navigation
