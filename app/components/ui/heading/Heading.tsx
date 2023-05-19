import { FC } from 'react'
import styles from './heading.module.scss'

const Heading: FC<{title: string}> = ({ title }) => {
	return (
		<h1 className={styles.heading}>
			{title}
		</h1>
	)
}

export default Heading
