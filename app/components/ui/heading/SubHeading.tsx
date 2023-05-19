import { FC } from 'react'
import styles from './heading.module.scss'

const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h2 className={styles.subHeading}>{title}</h2>
}

export default SubHeading
