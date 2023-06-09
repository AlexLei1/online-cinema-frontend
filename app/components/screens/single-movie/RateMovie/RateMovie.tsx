import { FC } from 'react'
import StarRating from 'react-star-rating-component'
import AuthButton from '@/ui/video-player/AuthPlaceholder/AuthButton'
import { useAuth } from '@/hooks/useAuth'
import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'
import SubHeading from '@/ui/heading/SubHeading';

const RateMovie: FC<{ slug: string; _id: string }> = ({ slug, _id }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(_id)

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<SubHeading title={'How do you like the movie?'}/>
			
				<p>Ratings improve recommendations</p>
				{user ? (
					<>
						{isSended ? (
							<div className={styles.thanks}>Thanks for rating!</div>
						) : (
							<StarRating
								name="star-rating"
								value={rating}
								onStarClick={handleClick}
								emptyStarColor="#4f4f4f"
							/>
						)}
					</>
				) : (
					<AuthButton slug={slug} />
				)}
			</div>
		</div>
	)
}

export default RateMovie
