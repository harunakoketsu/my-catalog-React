// 一部のpropsがテーマの spacing を参照している点です（theme.spacing[gap]）。gap="md"のように書くと、テーマで定義した値が自動的に使われます。

import type { FC, ElementType, CSSProperties, ComponentPropsWithRef } from 'react'
import { StyledFlexBox } from './styled'
import type { ThemeSpacing } from '@/styles/theme/theme.ts'

export interface FlexBoxProps extends ComponentPropsWithRef<'div'> {
  el?: ElementType
  flexDirection?: CSSProperties['flexDirection'] // 並び方向（row: 横 / column: 縦）
  alignItems?: CSSProperties['alignItems'] // 交差軸（縦）方向の子要素の揃え方
  justifyContent?: CSSProperties['justifyContent'] // 主軸（横）方向の子要素の揃え方
  flexWrap?: CSSProperties['flexWrap'] // 子要素が溢れたときに折り返すか
  flexFlow?: CSSProperties['flexFlow'] // flex-direction と flex-wrap をまとめて指定
  gap?: keyof ThemeSpacing // 子要素間の縦横の隙間（テーマ値）
  columnGap?: keyof ThemeSpacing // 子要素間の列方向の隙間（テーマ値）
  rowGap?: keyof ThemeSpacing // 子要素間の行方向の隙間（テーマ値）
  flex?: CSSProperties['flex'] // flex-grow / shrink / basis をまとめて指定
  flexGrow?: CSSProperties['flexGrow'] // 余白をどれだけ伸びて埋めるか
  flexBasis?: CSSProperties['flexBasis'] // 伸縮前の基準サイズ
  flexShrink?: CSSProperties['flexShrink'] // 幅が足りないときにどれだけ縮むか
  order?: CSSProperties['order'] // 表示順序（数値が小さいほど前に来る）

  backGroundColor?: CSSProperties['backgroundColor'] // 背景色
  marginBottom?: keyof ThemeSpacing // 下の外余白（テーマ値）
  marginTop?: keyof ThemeSpacing // 上の外余白（テーマ値）
  noValidate?: boolean // form要素として使うときにブラウザのバリデーションを無効化
}

const BaseFlexBox: FC<FlexBoxProps> = ({ children, el, ...prop }) => {
  return (
    <StyledFlexBox as={el} {...prop}>
      {children}
    </StyledFlexBox>
  )
}

export default BaseFlexBox
