import {FC} from 'react'
import Logo from '@/ui/logo/Logo';
import Search from './Search/Search';
import styles from './header.module.scss'
import Burger from '@/ui/burger/Burger';



const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<Logo/>
				<Burger/>
			</div>
			<Search/>
		</header>
	)
}

export default Header