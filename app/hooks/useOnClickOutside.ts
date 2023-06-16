import { useEffect, useRef } from "react"
import useResize from './useResize';

export const useOnClickOutside = (toggleBurger: any, isShow: any ) => {
	const {isWidth} = useResize()

	const ref = useRef<HTMLDivElement>(null) 

	const hendleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target) && isShow && !isWidth) {
			toggleBurger(!isShow)
		}
	}
	useEffect(() => {
		document.addEventListener('click', hendleClickOutside, true)
		return () => {document.removeEventListener('click', hendleClickOutside, true)}
	})

	return {ref}
}
