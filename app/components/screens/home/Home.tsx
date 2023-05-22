import { FC } from 'react'
import Gallery from '@/ui/gallery/Gallery'
import Heading from '@/ui/heading/Heading'
import SubHeading from '@/ui/heading/SubHeading'
import Slider from '@/ui/slider/Slider'
import { Meta } from '@/utils/meta'
import { IHome } from './home.types'
import styles from './home.module.scss'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {

	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<div className={styles.homePage}>
				<section>
					<Heading title="Watch movies online"/>
					{slides.length && <Slider slides={slides} />}
				</section>
			
				<section>
					<SubHeading title="Trending now" />
					{trendingMovies.length && <Gallery items={trendingMovies} />}
				</section>

				<section>
					<SubHeading title="Best actors" />
					{actors.length && <Gallery items={actors} />}
				</section>
			</div>
	
		</Meta>
	)
}

export default Home
