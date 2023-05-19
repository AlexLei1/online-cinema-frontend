import { FC } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
import styles from './Layout.module.scss'
import Header from './Header/Header';
import { useBurger } from '@/hooks/useBurger';


const Layout: FC = ({ children }) => {
	
	const { burger } = useBurger()


	return (
		<div className={styles.layout}>
			<Navigation isShow={burger.isShow}/>
			<Header/>
			<div className={styles.wrapper}>{children}</div>
			<Sidebar isShow={burger.isShow}/>
		</div>
	)
}

export default Layout
