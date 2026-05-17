import type { FC } from 'react'
import { useTheme } from 'styled-components'
import type { IconProps } from '../icon'

const ArrowLeftIcon: FC<IconProps> = ({ width = '16', height = '16', fill = 'accent', ...prop }) => {
	const theme = useTheme()

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth="0"
			viewBox="0 0 320 512"
			height={height}
			width={width}
			fill={theme.color[fill]}
			{...prop}
		>
			<path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
		</svg>
	)
}

export default ArrowLeftIcon
