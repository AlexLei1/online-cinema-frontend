import { FC } from 'react'
import styles from './heading.module.scss'

const MenuHeading: FC<{title: string}> = ({ title }) => {
	return <h1 className={styles.MenuHeading}>{title}</h1>
}

export default MenuHeading
