import { FC } from 'react'
import styles from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'
import SubHeading  from '@/ui/heading/SubHeading';

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<SubHeading title={'You must be logged in to start watching'}/>
			<AuthButton slug={slug} />
		</div>
	)
}

export default AuthPlaceholder
