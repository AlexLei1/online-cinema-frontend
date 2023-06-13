import dynamic from 'next/dynamic'
import { FC } from 'react'
import styles from './MobileMenu.module.scss'
import MenuItem from './MenuItem'
import MenuItemMobile from './MenuItemMobile'
import { IMenu } from './menu.types'
import MenuHeading from '@/components/ui/heading/MenuHeading'
import useResize from '@/hooks/useResize';

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const MobileMenu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {

	const {isWidth} = useResize()

	return (
		<div className={styles.menu}>
			<MenuHeading title={title}/>
			
			<ul className={styles.ul}>
				{items.map((item) => (
					isWidth ? <MenuItem key={item.link} item={item} /> : <MenuItemMobile key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default MobileMenu
