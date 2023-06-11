import { useTypedSelector } from '@/hooks/useTypedSelector';


export const useBurger = () => {
	const { burger } = useTypedSelector(state => state)

	return {burger}
} 