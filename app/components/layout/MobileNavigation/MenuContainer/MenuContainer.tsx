import dynamic from 'next/dynamic'
import { FC } from 'react'
import MobileMenu from './MobileMenu'
import { menus } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div>
			<MobileMenu menu={menus[0]} />
			<DynamicGenreMenu />
			<MobileMenu menu={{ title: 'General', items: [] }} />
		</div>
	)
}

export default MenuContainer
