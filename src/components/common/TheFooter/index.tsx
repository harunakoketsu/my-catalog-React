import type { FC } from 'react'
import { StyledFooter, StyledFooterCopyRight } from './styled'

const TheFooter: FC = () => {
  return (
    <StyledFooter>
      <StyledFooterCopyRight>&copy;  All Rights Reserved.</StyledFooterCopyRight>
    </StyledFooter>
  )
}

export default TheFooter
