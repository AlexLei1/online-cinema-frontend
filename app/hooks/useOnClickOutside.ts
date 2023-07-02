import { useEffect, useRef } from "react"
import useWidth from './useWidth';

export const useOnClickOutside = (toggleBurger: any, isShow: any ) => {
	const {width} = useWidth()

	const ref = useRef<HTMLDivElement>(null) 

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target) && isShow && !(width >= 1200)) {
			toggleBurger(!isShow)
		}
	}
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {document.removeEventListener('click', handleClickOutside, true)}
	})

	return {ref}
}
