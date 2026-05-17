import type { FC, ReactNode } from 'react'
import type { LinkProps } from 'react-router-dom'
import type { ThemeColor } from '@/styles/theme/theme'
import { StyledInternalLink } from './styled'

// Link は react-router-dom が提供する React コンポーネントなので、そのコンポーネント専用の型 LinkPropsを使う必要がある。
// NG：'Link' は HTML タグじゃないので使えない ComponentPropsWithRef<'Link'>

interface InternalLinkProps extends LinkProps {
  children: ReactNode
  color?: keyof ThemeColor
}

const BaseInternalLink: FC<InternalLinkProps> = ({ children, color = 'accent', ...prop }) => {
  return (
    <StyledInternalLink {...prop} color={color}>
      {children}
    </StyledInternalLink>
  )
}

export default BaseInternalLink
