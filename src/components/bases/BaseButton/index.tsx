import type { FC, ComponentPropsWithRef, CSSProperties, } from 'react'
import { StyledBaseButton, StyledBaseButtonWrapper } from './styled'
import type { ThemeColor } from '@/styles/theme/theme'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'text' | 'contained' | 'outlined'
  bgColor?: keyof ThemeColor
  isLoading?: boolean
  width?: CSSProperties['width']
}
const BaseButton: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  bgColor = 'accent',
  isLoading = false,
  ...prop
}) => {
  return (
    <StyledBaseButton
      variant={variant}
      bgColor={bgColor}
      isLoading={isLoading}
      {...prop}>
      <StyledBaseButtonWrapper isLoading={isLoading}>{children}</StyledBaseButtonWrapper>
    </StyledBaseButton>
  )
}

export default BaseButton
