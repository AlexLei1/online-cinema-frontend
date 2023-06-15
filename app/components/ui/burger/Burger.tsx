import {FC} from 'react'
import styles from './Burger.module.scss'
import cn from 'classnames'
import  useActions  from '@/hooks/useActions';
import { useBurger } from '@/hooks/useBurger';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const Burger: FC = () => {

	const { toggleBurger } = useActions()
	const { burger } = useBurger()
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		<button onClick={() => toggleBurger({isShow})} className={cn(styles.burger, {[styles.active]: !burger.isShow})}>
			<span></span>
		</button>
	)
}

export default Burger