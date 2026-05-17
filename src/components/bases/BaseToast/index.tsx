import type { FC } from 'react'
import { useEffect } from 'react'
import { StyledToast, StyledToastMessage, StyledToastCloseIcon } from './styled'
import { CloseIcon, CheckIcon, AlertIcon } from '../BaseIcons'
// import { ToastState } from '@/libs/store/slice/toastSlice'

// BaseToast の props の型定義
interface ToastProps {
  status: 'success' | 'error'  // Toast の種類（成功 or エラー）
  message: string             // 表示するメッセージ
  isOpen: boolean             // Toast が開いているかどうか
  onClose: () => void         // 閉じる時のコールバック関数
}
// interface ToastProps extends ToastState {
//   onClose: () => void
// }これでも可


// BaseToast コンポーネント。Toast の UI を表示する
const BaseToast: FC<ToastProps> = ({ status, message, isOpen = false, onClose }) => {
  // useEffect: success の Toast が開いたら、5秒後に自動で閉じる
  useEffect(() => {
    if (isOpen && status === 'success') {  //「右も左もtrueならtrue」
      const timer = setTimeout(onClose, 5000)// onClose 関数を呼んで Toast を閉じる
      return () => clearTimeout(timer)
    }
  }, [isOpen, status, onClose])  // isOpen, status, onClose が変わったら再実行

  // これも同じ意味
  // const timer = setTimeout(() => {
  //   onClose()
  // }, 5000)

  return (
    // StyledToast: status と isOpen を渡してスタイルを適用
    <StyledToast status={status} isOpen={isOpen}>
      {/* status によってアイコンを変える */}
      {status === 'success' && <CheckIcon fill="success" width={16} height={16} />}
      {status === 'error' && <AlertIcon fill="red" width={16} height={16} />}
      {/* ＆＆左OKなら右を実行 */}
      {/* メッセージを表示 */}
      <StyledToastMessage>{message}</StyledToastMessage>
      {/* 閉じるボタン。クリックで onClose を呼ぶ */}
      <StyledToastCloseIcon onClick={onClose}>
        <CloseIcon fill="black" width={14} height={14} />
      </StyledToastCloseIcon>
    </StyledToast>
  )
}

export default BaseToast
