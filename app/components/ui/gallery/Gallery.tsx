import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import { IGalleryItem } from './gallery.types'
import GalleryItem from './GalleryItem'
import 'react-multi-carousel/lib/styles.css'
import Arrow from './../Arrow/Arrow';



const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	
	const responsive: any = {
		desktopL: {
			breakpoint: { max: 4000, min: 1400 },
			items: 6,
		},
		desktopM: {
			breakpoint: { max: 1400, min: 1200 },
			items: 4,
		},
		desktopXS: {
			breakpoint: { max: 1200, min: 900 },
			items: 6,
		},
		tabletL: {
			breakpoint: { max: 900, min: 768 },
			items: 6,
		},
		mobileL: {
			breakpoint: { max: 768, min: 480 },
			items: 5,
		},
		mobileS: {
			breakpoint: { max: 480, min: 330 },
			items: 4,
		}
	};

	return (
		<Carousel  
			responsive={responsive}
			ssr={true}
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
