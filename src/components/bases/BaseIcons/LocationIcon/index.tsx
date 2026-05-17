import type { FC } from 'react'
import { useTheme } from 'styled-components'
import type { IconProps } from '../icon'

const LocationIcon: FC<IconProps> = ({ width = '16', height = '16', fill = 'accent', ...prop }) => {
	const theme = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth="0"
			viewBox="0 0 384 512"
			height={height}
			width={width}
			fill={theme.color[fill]}
			{...prop}
		>
			<path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
		</svg>
	)
}

export default LocationIcon
