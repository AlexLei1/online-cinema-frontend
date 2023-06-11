import { FC, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
import MobileNavigation from './MobileNavigation/MobileNavigation'
import styles from './Layout.module.scss'
import Header from './Header/Header';
import { useBurger } from '@/hooks/useBurger';
import cn from 'classnames';
import useResize from '@/hooks/useResize';
import useActions from '@/hooks/useActions';
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

const Layout: FC = ({ children }) => {
	const { burger } = useBurger()
	const {isWidth} = useResize()
	const {toggleBurger} = useActions()

	useEffect(() => {
		!burger.isShow ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
 	}, [!burger.isShow]);

	const {ref} = useOnClickOutside(toggleBurger, burger.isShow)
	return (
		<div ref={ref} className={styles.layout}>
			{isWidth ? <Navigation isShow={burger.isShow}/> : <MobileNavigation isShow={burger.isShow}/>}
			<Header/>
			<div className={cn(!burger.isShow ? styles.wrapperOpen : styles.wrapperClosed)}>{children}</div>
			<Sidebar isShow={burger.isShow}/>
		</div>
	)
}

export default Layout
