import { useEffect, useState, useRef } from "react"

export const useOnClickOutside = (isInitialValue: boolean) => {
	// состояние компонента меню
	const [isShow, setIsShow] = useState<boolean | undefined>(isInitialValue)

	// получаем бургер в обьекте для взаимодействия с ним
	const ref = useRef<HTMLDivElement>(null) 

	// функция для отслеживания области срабатывания события
	const hendleClickOutside = (event: any) => {

		// если событие click отработало в любой облости кроме меню 
		if (ref.current && !ref.current.contains(event.target)){
			setIsShow(false) // меняем состояние (закрываем меню)
		}
	}

	useEffect(() => {
		document.addEventListener('click', hendleClickOutside, true)
		return () => {document.removeEventListener('click', hendleClickOutside, true)}
	})

	// {текущий компонент, состояние кнопки бургер, функция для изминения состояния }
	return {ref, isShow, setIsShow}
}
