import styled, { css } from 'styled-components'
import type { ThemeFontSize, ThemeColor } from '@/styles/theme/theme'

export const StyledHeading = styled('h1').withConfig({
  shouldForwardProp: (prop) => !['fontSize', 'fontWeight', 'color', 'marginBottom'].includes(prop),
}) <{
  fontSize: keyof ThemeFontSize
  fontWeight: 'normal' | 'bold'
  color?: keyof ThemeColor
  marginBottom: string
} >`
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
`

export const StyledHeadingInner = styled.div`
	display: flex;
	align-items: center;
  /* 文字を真ん中 */
`
