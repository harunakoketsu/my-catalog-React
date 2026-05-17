import type { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledBaseHeader, StyledBaseHeaderInner } from './styled'
// import { GlobalNavigation, LoggedInGlobalNavigation } from '@/components/common/TheNavigation'
import { BaseInternalLink, BaseHeading } from '@/components/bases'
// import useSelector from '@/hooks/useSelector'

const TheHeader: FC = () => {
  const location = useLocation()
  const level = location.pathname === '/' ? 'h1' : 'div'
  // const isLogin = useSelector((state) => state.auth.isLogin)
  // const path = location.pathname

  return (
    <StyledBaseHeader>
      <StyledBaseHeaderInner alignItems="center" justifyContent="space-between">
        <BaseHeading level={level}>
          <BaseInternalLink to="/" color="black">
            お部屋探し
          </BaseInternalLink>
        </BaseHeading>
        {/* {isLogin === null ? <div /> : isLogin ? <LoggedInGlobalNavigation /> : <GlobalNavigation />} */}
      </StyledBaseHeaderInner>
    </StyledBaseHeader>
  )
}

export default TheHeader
