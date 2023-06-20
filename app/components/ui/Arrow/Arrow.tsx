import { FC } from 'react'
import cn from 'classnames'

import { MaterialIcon } from '../icons/MaterialIcon'

import styles from './Arrow.module.scss'

interface IArrow {
	variant: 'left' | 'leftSlider' |'right' | 'rightSlider'
	clickHandler?: () => void
	onClick?: () => void 
	// rest?: {};
}

const Arrow: FC<IArrow> = ({ clickHandler, onClick, ...rest}) => {
	const isLeft = rest.variant === 'left'
	const isLeftSlider = rest.variant === 'leftSlider'
	const click = onClick || clickHandler

	return (
		<button
			id={rest.variant}
			onClick={click}
			className={styles.arrow}
		>
			<MaterialIcon name={isLeft || isLeftSlider ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}


export default Arrow
