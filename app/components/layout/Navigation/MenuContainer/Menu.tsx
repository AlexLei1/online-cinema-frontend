import dynamic from 'next/dynamic'
import { FC } from 'react'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.types'
import MenuHeading from '@/components/ui/heading/MenuHeading'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {



	return (
		<div className={styles.menu}>
			<MenuHeading title={title}/>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} /> 
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
