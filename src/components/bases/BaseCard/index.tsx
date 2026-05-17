import type { FC, ComponentPropsWithRef } from 'react'
import { StyledCard } from './styled'
import type { ThemeSpacing, ThemeBorderRadius } from '@/styles/theme/theme'

interface CardProps extends ComponentPropsWithRef<'div'> {
  py?: keyof ThemeSpacing
  px?: keyof ThemeSpacing
  borderRadius?: keyof ThemeBorderRadius

}  //ThemeSpacingの“プロパティ名として定義されているキーならOK”


const BaseCard: FC<CardProps> = ({ children, ...prop }) => {
  return <StyledCard {...prop}>{children}</StyledCard>
}

export default BaseCard
