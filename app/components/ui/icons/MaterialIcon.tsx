import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { useRenderClient } from '@/hooks/useRenderClient'
import { TypeMaterialIconName } from '@/shared/types/icons.types'

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name = 'MdHome' }) => {
	const { isRenderClient } = useRenderClient()
	const IconComponent = MaterialIcons[name]
	console.log(name)
	if (isRenderClient)
		return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	else return null
}
