import { useQuery } from 'react-query'
import { UserService } from '@/services/user/user.service'
import { useAuth } from '@/hooks/useAuth'

export const useFavorites = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user
	})

	return { isLoading, favoritesMovies, refetch }
}
