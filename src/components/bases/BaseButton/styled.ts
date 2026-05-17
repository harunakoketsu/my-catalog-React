import styled, { css } from 'styled-components'
import type { ThemeColor } from '@/styles/theme/theme'
import type { CSSProperties } from 'react'

export const StyledBaseButton = styled('button').withConfig({
	shouldForwardProp: (prop) => !['variant', 'bgColor', 'isLoading', 'width'].includes(prop),
}) <{
	variant: 'text' | 'contained' | 'outlined'
	bgColor: keyof ThemeColor
	isLoading: boolean
	width?: CSSProperties['width']
} >`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	cursor: ${({ isLoading }) => (isLoading ? 'auto' : 'pointer')};
	transition: ${({ theme }) => theme.transition};
	/* width: ${({ variant }) => (variant === 'text' ? 'auto' : '100%')}; */
	width: ${({ width, variant }) =>
		width ? width : variant === 'text' ? 'auto' : '100%'};

	height: ${({ variant }) => (variant === 'text' ? '20px' : '40px')};

	${({ variant, bgColor }) => {
		switch (variant) {
			case 'text':
				return css`
					color: ${({ theme }) => theme.color[bgColor] ?? theme.color.accent};
				`
			case 'contained':
				return css`
					color: ${({ theme }) => theme.color.white};
					background-color: ${({ theme }) => theme.color[bgColor] ?? theme.color.accent};
				`
			case 'outlined':
				return css`
					color: ${({ theme }) => theme.color.accent};
					background-color: ${({ theme }) => theme.color.white};
					border: 1px solid ${({ theme }) => theme.color.accent};
				`
			default:
				return
		}
	}}

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		background-color: ${({ theme }) => theme.color.main};
		border: none;
		color: ${({ theme }) => theme.color.white};
		cursor: auto;
		pointer-events: none;

		& > div {
			cursor: auto;
		}

		svg {
			fill: ${({ theme }) => theme.color.white};
		}
	}

	&::after {
		content: '';
		position: absolute;
		display: block;
		width: 20px;
		height: 20px;
		border-style: solid;
		border-color: ${({ theme }) => theme.color.base} ${({ theme }) => theme.color.base}
			${({ theme }) => theme.color.main} ${({ theme }) => theme.color.main};
		border-radius: ${({ theme }) => theme['border-radius'].full};
		border-width: 2px;
		opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
		visibility: ${({ isLoading }) => (isLoading ? 'visible' : 'hidden')};
		animation: spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}
`

export const StyledBaseButtonWrapper = styled('div').withConfig({
	shouldForwardProp: (prop) => !['isLoading'].includes(prop),
}) <{ isLoading: boolean }>`
	align-items: center;
	justify-content: center;
	gap: 0 ${({ theme }) => theme.spacing.sm};
	cursor: ${({ isLoading }) => (isLoading ? 'auto' : 'pointer')};
	display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
	text-align: center;
`
