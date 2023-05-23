import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import { IGalleryItem } from './gallery.types'
import GalleryItem from './GalleryItem'
import styles from './Gallery.module.scss'
import 'react-multi-carousel/lib/styles.css'
import Arrow from './../Arrow/Arrow';



const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	
	const responsive: any = {
		desktopBig: {
			breakpoint: { max: 4000, min: 1200 },
			items: 6,
		},
		desktop: {
			breakpoint: { max: 1200, min: 992 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 992, min: 768 },
			items: 4,
		},
		mobile: {
			breakpoint: { max: 768, min: 480 },
			items: 3,
		},
		mobileSmall: {
			breakpoint: { max: 480, min: 320 },
			items: 3,
		}
	};

	return (
		<Carousel  
			responsive={responsive}
			ssr={true}
			containerClass={styles.containerClass}
			customLeftArrow={<Arrow variant='left'/>}
			customRightArrow={<Arrow variant='right'/>}
		>
			{items.map(item => (
				<GalleryItem key={item.url} item={item} variant='vertical' />
			))}
		</Carousel>
	)
}

export default Gallery
