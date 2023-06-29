import dynamic from 'next/dynamic'
import { FC } from 'react'
import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import { IGalleryItem } from '@/ui/gallery/gallery.types'
import SubHeading from '@/ui/heading/SubHeading'
import { IMovie } from '@/shared/types/movie.types'
import { Meta } from '@/utils/meta'
import Content from './Content/Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})
const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
	movie,
	similarMovies,
}) => {
	useUpdateCountOpened(movie.slug)

	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<div>
				<section>
					<Banner imagePath={movie.bigPoster} Detail={() => <Content movie={movie} />}/>
				</section>
				<section>
					<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />
				</section>
				<section>
					<SubHeading title="Similar" />
					<Gallery items={similarMovies} />
				</section>
				<section>
					<DynamicRateMovie slug={movie.slug} _id={movie._id} />
				</section>
			</div>
		</Meta>
	)
}

export default SingleMovie
