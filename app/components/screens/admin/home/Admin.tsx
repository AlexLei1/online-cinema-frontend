import { FC } from 'react'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import { Meta } from '@/utils/meta'
import Statistics from './Statistics/Statistics'
import  SubHeading  from '@/ui/heading/SubHeading';
import styles from './Admin.module.scss'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<section>
				<SubHeading title="Some statistics" />
				<Statistics />
			</section>
		</Meta>
	)
}

export default Admin
