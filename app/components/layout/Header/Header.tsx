import {FC} from 'react'
import Logo from '@/ui/logo/Logo';
import Search from './Search/Search';
import styles from './header.module.scss'
import Burger from '@/ui/burger/Burger';
import cn from 'classnames'
import {useScrollDirection} from '@/hooks/useScrollDirection';


const Header: FC = () => {
	const scrollDir = useScrollDirection()
	
	return (
		<header className={cn(styles.header, {[styles.up]: (scrollDir === 'up')},  {[styles.down]: (scrollDir === 'down')})}>
			<div>
				<Logo/>
				<Burger/>
			</div>
			<Search/>
		</header>
	)
}

export default Header