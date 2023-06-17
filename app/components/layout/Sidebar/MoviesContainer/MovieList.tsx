import Link from 'next/link'
import { FC } from 'react'
import { IMovieList } from './movie.types'
import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import MenuHeading from '@/components/ui/heading/MenuHeading';
import useResize  from '@/hooks/useResize';
import useActions  from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';


const MovieList: FC<{ list: IMovieList }> = ({list: { link, movies, title }}) => {
	const {isWidth} = useResize()
	const { toggleBurger } = useActions() 
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		
		<div className={styles.list}>
			<MenuHeading title={title}/>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				{isWidth ? <a className={styles.button}>See more</a> : <a  onClick={() => toggleBurger({isShow})} className={styles.button}>See more</a>}
			</Link>
		</div>
	)
}

export default MovieList
