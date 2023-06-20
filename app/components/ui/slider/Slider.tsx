import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import Arrow from '../Arrow/Arrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { ISlide } from './slider.types'
import { useSlider } from './useSlider'

interface ISlider {
	buttonTitle?: string
	slides: ISlide[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(slides.length)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames="slide-animation"
				unmountOnExit>
					<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

				{isPrev && (
					<Arrow variant="leftSlider" clickHandler={() => handleClick('prev')} />
				)}
				
				{isNext && (
					<Arrow variant="rightSlider" clickHandler={() => handleClick('next')} />
				)}

		</div>
	)
}

export default Slider
