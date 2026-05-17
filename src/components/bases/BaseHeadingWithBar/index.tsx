//棒付きの題名

import type { FC, ComponentPropsWithRef, ElementType } from 'react'
import type { ThemeFontSize, ThemeColor } from '@/styles/theme/theme'
import { StyledHeadingWithBar, StyledHeadingWithBarInner } from './styled'

interface HeadingWithBarProps extends ComponentPropsWithRef<'h1'> {
  level?: ElementType  // ElementType は「HTMLタグ or Reactコンポーネントを入れられる型」
  fontSize?: keyof ThemeFontSize
  fontWeight?: 'normal' | 'bold'
  color?: keyof ThemeColor
  marginBottom?: string
}

const BaseHeadingWithBar: FC<HeadingWithBarProps> = ({
  children,
  level = 'h1',
  fontSize = '2xl',
  fontWeight = 'normal',
  color = 'black',
  marginBottom = '0px', //コンポーネントの責務から外れてる？？要検討
  ...prop
}) => {
  return (
    <StyledHeadingWithBar
      as={level}  //asはHTMLタグを動的に変えられる機能
      {...prop}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      marginBottom={marginBottom}
    >
      <StyledHeadingWithBarInner>{children}</StyledHeadingWithBarInner>
    </StyledHeadingWithBar>
  )
}

export default BaseHeadingWithBar
