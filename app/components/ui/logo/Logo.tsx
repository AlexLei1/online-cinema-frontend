import Link from 'next/link'
import { FC } from 'react'
import styles from './logo.module.scss'
import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className={styles.link}>
				<img src={logoImage.src} alt="Movie app" draggable={false}/>
			</a>
		</Link>
	)
}

export default Logo
