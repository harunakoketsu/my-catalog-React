import styled from 'styled-components'

export const StyledDd = styled.dd`
	${({ theme }) => theme.font('xs')};
	color: ${({ theme }) => theme.color.black};
	text-align: justify
`
