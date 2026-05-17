import styled from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import type { FlexBoxProps } from './index'

export const StyledFlexBox = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
}) <FlexBoxProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex: ${({ flex }) => flex};
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : undefined)};
  row-gap: ${({ theme, rowGap }) => rowGap ? theme.spacing[rowGap] : undefined};
  column-gap: ${({ theme, columnGap }) => columnGap ? theme.spacing[columnGap] : undefined};
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  background-color: ${({ backGroundColor }) => backGroundColor};
  margin-bottom: ${({ theme, marginBottom }) =>
    marginBottom && typeof marginBottom === 'string'
      ? theme.spacing[marginBottom]
      : undefined};
  margin-top: ${({ theme, marginTop }) =>
    marginTop && typeof marginTop === 'string'
      ? theme.spacing[marginTop]
      : undefined};
      /* 値をthemeから持ってくるやつはthemeも入れる */
      `