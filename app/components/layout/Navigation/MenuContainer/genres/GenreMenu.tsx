import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div>
			<SkeletonLoader count={5}/>
		</div>
	) : (
		<Menu
			menu={{
				title: 'Popular genres',
				items: data || [],
			}}
		/>
	)
}

export default GenreMenu
