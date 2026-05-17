import styled from 'styled-components'

export const StyledFooter = styled.footer`
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.color.white};
`

export const StyledFooterCopyRight = styled.p`
	padding: ${({ theme }) => theme.spacing.lg} 0;
	${({ theme }) => theme.font('xs')}
`
