import {FC} from 'react'
import Logo from '@/ui/logo/Logo';
import Search from './Search/Search';
import styles from './header.module.scss'
import Burger from '@/ui/burger/Burger';
import cn from 'classnames'
import {useScrollDirection} from '@/hooks/useScrollDirection';
import useActions from '@/hooks/useActions';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';


interface IHeader {
	isShow: boolean
}

const Header: FC<IHeader> = ({isShow}) => {
	const scrollDir = useScrollDirection()

	return (
		<header className={cn(styles.header, {[styles.up]: (scrollDir === 'up')},  {[styles.down]: (scrollDir === 'down')})}>
			<div>
				<Burger/>
				<Logo/>
			</div>
			<Search/>
		</header>
	)
}

export default Header