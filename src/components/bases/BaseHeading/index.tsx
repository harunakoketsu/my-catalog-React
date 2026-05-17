import type { FC, ComponentPropsWithRef, ElementType } from 'react'
import type { ThemeFontSize, ThemeColor } from '@/styles/theme/theme'
import { StyledHeading, StyledHeadingInner } from './styled'

interface HeadingProps extends ComponentPropsWithRef<'h1'> {
  level?: ElementType
  fontSize?: keyof ThemeFontSize
  fontWeight?: 'normal' | 'bold'
  color?: keyof ThemeColor
  marginBottom?: string
}

const BaseHeading: FC<HeadingProps> = ({
  children,
  level = 'h1',
  fontSize = '2xl',
  fontWeight = 'normal',
  color = 'black',
  marginBottom = '0px', //コンポーネントの責務から外れてる？？要検討
  ...prop
}) => {
  return (
    <StyledHeading
      as={level}
      {...prop}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      marginBottom={marginBottom}
    >
      <StyledHeadingInner>{children}</StyledHeadingInner>
    </StyledHeading>
  )
}

export default BaseHeading
