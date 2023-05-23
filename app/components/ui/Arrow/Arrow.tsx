import { FC } from 'react'
import cn from 'classnames'

import { MaterialIcon } from '../icons/MaterialIcon'

import styles from './Arrow.module.scss'

interface IArrow {
	variant: 'left' | 'right'
	clickHandler?: () => void
	onClick?: () => void 
	rest?: {};
}

const Arrow: FC<IArrow> = ({ clickHandler, onClick, ...rest}) => {
	const isLeft = rest.variant === 'left'
	const click = onClick || clickHandler


	return (
		<button
			id={rest.variant}
			onClick={click}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}


export default Arrow
