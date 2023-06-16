import { useTypedSelector } from '@/hooks/useTypedSelector';
import useResize  from '@/hooks/useResize';


export const useBurger = () => {
	const {isWidth} = useResize()

	const { burger } = useTypedSelector(state => state)


	return {burger}	
} 