import { FC, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
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
	const {ref} = useOnClickOutside(toggleBurger, !burger.isShow)
	

	useEffect(() => {
		!burger.isShow !== isWidth ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
 	}, [burger.isShow, isWidth]);


	return (
		<>
			<div ref={ref} className={styles.layout}>
				<Navigation isShow={burger.isShow}/> 
				<Header isShow={burger.isShow}/>
				<Sidebar isShow={burger.isShow}/>
			</div>
			<div className={cn([!burger.isShow ? 'menuOpen' : ''], 'wrapper') }>{children}</div>
		</>
	)
}

export default Layout
