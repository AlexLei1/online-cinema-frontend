import { FC, useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'
import styles from './Layout.module.scss'
import Header from './Header/Header';
import { useBurger } from '@/hooks/useBurger';
import cn from 'classnames';
import useWidth from '@/hooks/useWidth';
import useActions from '@/hooks/useActions';
import { useOnClickOutside } from '@/hooks/useOnClickOutside'



const Layout: FC = ({ children }) => {
	const { burger } = useBurger()
	const {width} = useWidth()
	const {toggleBurger} = useActions()
	const {ref} = useOnClickOutside(toggleBurger, !burger.isShow)


	useEffect(() => {
		(!burger.isShow) !== (width >= 1200) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
 	}, [burger.isShow, width]);


	return (
		<>
			<div ref={ref} className={styles.layout}>
				<Navigation isShow={burger.isShow}/> 
				<Header isShow={burger.isShow}/>
				<Sidebar isShow={burger.isShow}/>
			</div>
			<div className={cn([!burger.isShow ? 'menuOpen' : '']) }>
				<div className='wrapper'>
					{children}
				</div>
			</div>
		</>
	)
}

export default Layout
