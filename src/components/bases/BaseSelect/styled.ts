import styled from 'styled-components'

export const StyledSelectWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 40px;
	padding: ${({ theme }) => `0 ${theme.spacing.md}`};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	border: 1px solid ${({ theme }) => theme.color.main};
	background-color: ${({ theme }) => theme.color.white};
	cursor: pointer;
`

export const StyledSelectChildren = styled.div`
	display: inline-flex;
	padding-right: ${({ theme }) => theme.spacing.md};
`

export const StyledSelect = styled.select`
	width: 100%;
	height: 100%;
	${({ theme }) => theme.font('md')};
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.transparent};

	&:invalid,
	&:disabled {
		color: ${({ theme }) => theme.color.main};
	}
`
