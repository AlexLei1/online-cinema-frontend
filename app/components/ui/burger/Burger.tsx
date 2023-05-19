import {FC} from 'react'
import styles from './Burger.module.scss'
import cn from 'classnames'
import { useActions } from '@/hooks/useActions';
import { useBurger } from '@/hooks/useBurger';

const Burger: FC = () => {

	const { toggleBurger } = useActions()
	const { burger } = useBurger()

	return (
		<button onClick={() => toggleBurger(burger)} className={cn(styles.burger, {[styles.active]: !burger.isShow})}>
			<span></span>
		</button>
	)
}

export default Burger