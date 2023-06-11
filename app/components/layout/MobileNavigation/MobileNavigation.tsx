import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './MobileNavigation.module.scss'
import cn from 'classnames';

interface IMobileNavigation {
	isShow: boolean
}

const MobileNavigation: FC<IMobileNavigation> = ({isShow}) => {
	
	return (
		<div hidden={isShow} className={cn(styles.navigation)}>
			<MenuContainer />
		</div>
	)
}

export default MobileNavigation
