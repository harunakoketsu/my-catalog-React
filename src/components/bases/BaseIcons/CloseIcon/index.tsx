import type { FC } from 'react'
import { useTheme } from 'styled-components'
import type { IconProps } from '../icon'

const CloseIcon: FC<IconProps> = ({ width = '18', height = '18', fill = 'accent', ...prop }) => {
	const theme = useTheme()
	//外から調整できるパラメータを渡してる

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg" //「これはHTMLじゃなくてSVGですよ」SVGの正式な標準名前空間
			viewBox="0 0 18 18"  //「SVGの中の座標の基準」左上から右に１８下に１８の範囲で描く
			//「SVGの基本設定」
			width={width}
			height={height}
			fill={theme.color[fill]}
			{...prop}
		>
			<g id="Frame"> //「この中にある図形をひとまとまりとして扱う」今回はpath1つだから消しても良い
				<path
					id="Vector"
					d="M11.3456 9L14.8637 5.48191C15.2954 5.0502 15.2954 4.35023 14.8637 3.91816L14.0818 3.13629C13.6501 2.70457 12.9502 2.70457 12.5181 3.13629L9 6.65437L5.48191 3.13629C5.0502 2.70457 4.35023 2.70457 3.91816 3.13629L3.13629 3.91816C2.70457 4.34988 2.70457 5.04984 3.13629 5.48191L6.65437 9L3.13629 12.5181C2.70457 12.9498 2.70457 13.6498 3.13629 14.0818L3.91816 14.8637C4.34988 15.2954 5.0502 15.2954 5.48191 14.8637L9 11.3456L12.5181 14.8637C12.9498 15.2954 13.6501 15.2954 14.0818 14.8637L14.8637 14.0818C15.2954 13.6501 15.2954 12.9502 14.8637 12.5181L11.3456 9Z"
				/>  //ここが実際の×マーク
			</g>
		</svg>
	)
}

export default CloseIcon
