import type { FC, ReactNode, } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledDefaultLayout, StyledDefaultLayoutInner } from './styled'
import { TheHeader, TheFooter } from '@/components/common'
import { BaseToast } from '@/components/bases'
import { useDispatch } from '@/hooks'
import { useSelector } from '@/hooks'
import { onToastClose } from '@/store/slice/toastSlice'

interface TheDefaultLayoutProps {
  children: ReactNode
}

const TheDefaultLayout: FC<TheDefaultLayoutProps> = ({ children }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { isOpen, message, status } = useSelector((state) => state.toast)
  //useSelector で Redux の store からstate.toast（sliceが管理している状態）を取り出して、isOpen,message, status という変数に分割代入。

  useEffect(() => {
    dispatch(onToastClose())
  }, [location.key, dispatch])
  //location が変わる = ルート（URL）が変わる

  // トップページのみページ遷移時にトップへ戻す
  // アニメーションなしで即座にトップへ飛ぶ指定
  useEffect(() => {
    const isTopPage = location.pathname === '/' ||
      location.pathname === '/top'
    if (!isTopPage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
    // location.pathname は条件分岐のみで使用、遷移検知は location.key に任せる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key])

  // useEffect(() => {
  //   if ('scrollRestoration' in window.history) {
  //     window.history.scrollRestoration = 'manual'
  //     // ブラウザの自動復元を無効化
  //   }
  // }, [])
  // トップのみに聞かせてるから今回は消す、前ページの時は使用

  return (
    <>
      <BaseToast status={status} message={message} isOpen={isOpen} onClose={() => dispatch(onToastClose())} />
      <TheHeader />
      <StyledDefaultLayout>
        <StyledDefaultLayoutInner>{children}</StyledDefaultLayoutInner>
      </StyledDefaultLayout>
      <TheFooter />
    </>
  )
}

export default TheDefaultLayout


// Toast表示の流れ
// dispatch(onToastOpen({ status, message })) で slice の state 更新
// TheDefaultLayout が useSelector((state) => state.toast) で取得
// 取得した status / message / isOpen を BaseToast に props で渡して表示