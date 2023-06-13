import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import MobileMenu from '../MobileMenu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<MobileMenu
			menu={{
				title: 'Popular genres',
				items: data || [],
			}}
		/>
	)
}

export default GenreMenu
