import styled, { css } from 'styled-components'
import type { ThemeFontSize, ThemeColor } from '@/styles/theme/theme'

export const StyledHeadingWithBar = styled('h1').withConfig({
	shouldForwardProp: (prop) => !['fontSize', 'fontWeight', 'color', 'marginBottom'].includes(prop),
}) < {
	fontSize: keyof ThemeFontSize
	fontWeight: 'normal' | 'bold'
	color?: keyof ThemeColor
	marginBottom?: string
} >`
	position: relative;
	padding-left: ${({ theme }) => theme.spacing.md};
	color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.black)};
	margin-bottom: ${({ marginBottom }) => marginBottom ?? '0px'};

	${({ fontWeight, fontSize }) => {
		switch (fontWeight) {
			case 'bold':
				return css`
					${({ theme }) => theme['font-b'](fontSize)}
				`
			default:
				return css`
					${({ theme }) => theme.font(fontSize)}
					font-weight: normal;
				`
		}
	}};

	&::before {
		content: '';
		position: absolute;
		display: block;
		top: 50%;
		left: 0;
		width: 24px;
		height: 24px;
		background-color: ${({ theme }) => theme.color.accent};
		transform: translateY(-50%);
	}
`

export const StyledHeadingWithBarInner = styled.span`
	display: flex;
	align-items: center;
`
