import type { FC } from 'react'
import { BaseFlexBox } from '@/components/bases'
import { BaseInternalLink } from '@/components/bases'

const GlobalNavigation: FC = () => {
  return (
    <nav>
      <BaseFlexBox el="ul" alignItems="center" justifyContent="space-between" columnGap="2xl">
        <li>
          <BaseInternalLink to="/login" color="black">
            ログイン
          </BaseInternalLink>
        </li>
        <li>
          <BaseInternalLink to="/sign-up">新規会員登録</BaseInternalLink>
        </li>
      </BaseFlexBox>
    </nav>
  )
}

export default GlobalNavigation
