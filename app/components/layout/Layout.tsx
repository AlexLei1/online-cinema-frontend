import { FC } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
import styles from './Layout.module.scss'
import Header from './Header/Header';
import { useBurger } from '@/hooks/useBurger';
import cn from 'classnames';


const Layout: FC = ({ children }) => {
	const { burger } = useBurger()

	return (
		<div className={styles.layout}>
			<Navigation isShow={burger.isShow}/>
			<Header/>
			<div className={cn(!burger.isShow ? styles.wrapperOpen : styles.wrapperClosed)}>{children}</div>
			<Sidebar isShow={burger.isShow}/>
		</div>
	)
}

export default Layout
