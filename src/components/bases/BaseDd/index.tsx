import type { FC, ComponentPropsWithRef } from 'react'
import { StyledDd } from './styled'

type DdProps = ComponentPropsWithRef<'dd'>

const BaseDd: FC<DdProps> = ({ children, ...prop }) => {
  return <StyledDd {...prop}>{children}</StyledDd>
}

export default BaseDd
