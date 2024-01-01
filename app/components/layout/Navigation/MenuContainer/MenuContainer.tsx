import dynamic from 'next/dynamic'
import { FC } from 'react'
import Menu from './Menu'
import { menu } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={menu[0]} />
			<DynamicGenreMenu />
			<Menu menu={{ title: 'General', items: [] }} />
		</div>
	)
}

export default MenuContainer
