import styled from 'styled-components'
import type { ThemeSpacing, ThemeBorderRadius } from '@/styles/theme/theme'

export const StyledCard = styled('div').withConfig({
	shouldForwardProp: (prop) => !['py', 'px', 'borderRadius'].includes(prop),
}) <{ py?: keyof ThemeSpacing; px?: keyof ThemeSpacing; borderRadius?: keyof ThemeBorderRadius }>`
	background-color: ${({ theme }) => theme.color.white};
	box-shadow: ${({ theme }) => theme['box-shadow']};
	border-radius: ${({ theme, borderRadius }) => theme['border-radius'][borderRadius ?? 'rounded-md']};
	padding: ${({ theme, py, px }) => `${theme.spacing[py ?? '4xl']} ${theme.spacing[px ?? '4xl']}`};
`
//pyもpxも指定されてなければ どっちも 4xl になる