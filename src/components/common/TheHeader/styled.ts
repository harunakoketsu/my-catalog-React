import styled from 'styled-components'
import { BaseFlexBox } from '@/components/bases'

export const StyledBaseHeader = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.main};
`

export const StyledBaseHeaderInner = styled(BaseFlexBox)`
  max-width: min(calc(1000 / 1280 * 100vw), 1000px); //小さい方を採用（maxが1000px）
  margin: 0 auto;
`
