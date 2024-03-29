import { FC } from 'react'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'
import { Meta } from '@/utils/meta'
import CollectionItem from './CollectionItem'
import styles from './Collections.module.scss'
import { ICollection } from './collections.types'

const title = 'Genres'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} />
			<Description text={description} className={styles.description} />
			<section>
				<div className={styles.collections}>
					{collections.map((collection) => (
						<CollectionItem key={collection._id} collection={collection} />
					))}
				</div>
			</section>
		</Meta>
	)
}

export default Collections
