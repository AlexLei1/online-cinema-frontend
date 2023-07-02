import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'
import { getGenresListEach } from '@/utils/movie/getGenresList'
import { getGenreUrl, getMovieUrl } from '@/configs/url.config'
import styles from './MovieList.module.scss'
import { IWidgetMovie } from './movie.types'
import useWidth  from '@/hooks/useWidth';
import useActions  from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const MovieItem: FC<{ movie: IWidgetMovie }> = ({ movie }) => {
	const {width} = useWidth()
	const { toggleBurger } = useActions() 
	const {isShow} = useTypedSelector(state => state.burger)

	return (
		<div className={styles.item}>
			<div className={styles.photo}>
				<Link href={getMovieUrl(movie.slug)}>
					{(width >= 1200) ? 
					<div>
						<img src={movie.poster}  alt={movie.title} />
					</div> : 
					<div onClick={() => toggleBurger({isShow})}>
						<img src={movie.poster}  alt={movie.title} />
					</div>}
				</Link>
			</div>

			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getGenreUrl(slug)}>
								{(width >= 1200) ? <a>{getGenresListEach(idx, movie.genres.length, name)}</a> : 
								<a onClick={() => toggleBurger({isShow})}>{getGenresListEach(idx, movie.genres.length, name)}</a>}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
{/* <Image
			alt={movie.title}
			width={65}
			height={97}
			src={movie.poster}
			draggable={false}
			priority
/> */}