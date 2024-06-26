import { GetStaticProps, NextPage } from 'next'
import { errorCatch } from 'api/api.helpers'
import Collections from '@/screens/collections/Collections'
import { ICollection } from '@/screens/collections/collections.types'
import { GenreService } from '@/services/genre/genre.service'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: { collections },
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {},
			notFound: true,
		}
	}
}

export default GenresPage
