import styled from 'styled-components'

interface StyledToastProps {
  status: 'success' | 'error'
  isOpen: boolean
} //渡すpropsに型をつけてる

//status と isOpen という「見た目用の情報」を styled-components に渡して、実際の HTML div には渡さないようにしている
//shouldForwardPropはdiv に props を渡すかどうかを決める関数です。
//withConfig(...) は「設定をセットする」

export const StyledToast = styled('div').withConfig({
  shouldForwardProp: (prop) => !['status', 'isOpen'].includes(prop),
}) <StyledToastProps>`
	position: fixed;
	top: 64px;
	left: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0 ${({ theme }) => theme.spacing.sm};
	min-width: 300px;
	max-width: 420px;
	padding: ${({ theme }) => theme.spacing.lg};
	border-radius: ${({ theme }) => theme['border-radius'].rounded};
	background-color: ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};
	box-shadow: ${({ theme }) => theme['box-shadow']};
	transform: translateX(-50%);
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	transition: ${({ theme }) => theme.transition};
	z-index: 10;
`

export const StyledToastMessage = styled.span`
	flex: 1;
`

export const StyledToastCloseIcon = styled.button`
	display: inline-flex;
`
