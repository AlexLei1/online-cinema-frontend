import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import { IGalleryItem } from './gallery.types'
import GalleryItem from './GalleryItem'

import styles from './Gallery.module.scss'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
			
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,

		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,

		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,

		}
	};
	
	return (
		<Carousel  responsive={responsive}>
			<div>Item 1</div>
			<div>Item 2</div>
			<div>Item 3</div>
			<div>Item 4</div>

			{/* {items.map(item => (
				<GalleryItem key={item.url} item={item} variant='vertical' />
			))} */}
		</Carousel>
	)
}

export default Gallery
