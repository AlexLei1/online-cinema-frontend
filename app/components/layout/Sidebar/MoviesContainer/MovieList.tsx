import Link from 'next/link'
import { FC } from 'react'
import { IMovieList } from './movie.types'
import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import MenuHeading from '@/components/ui/heading/MenuHeading';

const MovieList: FC<{ list: IMovieList }> = ({list: { link, movies, title }}) => {

	return (
		
		<div className={styles.list}>
			<MenuHeading title={title}/>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>See more</a>
			</Link>
		</div>
	)
}

export default MovieList
