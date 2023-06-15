import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { MaterialIcon } from '@/ui/icons/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.types'

import { useTypedSelector } from '@/hooks/useTypedSelector';
import useResize from '@/hooks/useResize'
import useActions from '@/hooks/useActions';



const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	const {isWidth} = useResize()
	const { toggleBurger } = useActions() 
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		
		<li className={cn({[styles.active]: asPath === item.link})}>
			<Link href={item.link}>
				{isWidth ? <a><MaterialIcon name={item.icon} /><span>{item.title}</span></a> : 
				<a onClick={() => toggleBurger({isShow})}><MaterialIcon name={item.icon} /><span>{item.title}</span></a>}
			</Link>
		</li>
	)
}

export default MenuItem
