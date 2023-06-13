import { FC } from 'react'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './MobileNavigation.module.scss'
import cn from 'classnames';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import useActions  from '@/hooks/useActions';

interface IMobileNavigation {
	isShow: boolean
}

const MobileNavigation: FC<IMobileNavigation> = ({isShow}) => {
	const {toggleBurger} = useActions()
	const {ref} = useOnClickOutside(toggleBurger, !isShow)

	return (
		<div ref={ref} hidden={isShow} className={cn(styles.navigation)}>
			<MenuContainer />
		</div>
	)
}

export default MobileNavigation
