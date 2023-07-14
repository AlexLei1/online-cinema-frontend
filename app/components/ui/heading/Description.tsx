import parse from 'html-react-parser'
import { FC } from 'react'
import styles from './heading.module.scss'
const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return (
		<div
			className={styles.description}
		>
			<p>{parse(text)}</p>
		</div>
	)
}

export default Description
