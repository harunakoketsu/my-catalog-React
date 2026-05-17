import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Toast のステータス型。成功(success)またはエラー(error)のみ許可
type ToastStatus = 'success' | 'error'

// Toast の state の型定義
export interface ToastState {
  status: ToastStatus  // Toast の種類（成功 or エラー）
  message: string      // 表示するメッセージ
  isOpen: boolean      // Toast が開いているかどうか
}

// slice の初期状態
const initialState: ToastState = {
  status: 'success',
  message: '',
  isOpen: false,
}

export const toastSlice = createSlice({
  name: 'toast',  // slice の名前。action type のプレフィックスになる
  initialState,
  reducers: {
    // Toast を開く action。payload に status と message を渡す
    onToastOpen: (state, action: PayloadAction<{ status: ToastStatus; message: string }>) => {
      state.status = action.payload.status  //主に 見た目を切り替えるための状態.  それに加えて「意味（成功通知か失敗通知か）」も保持
      state.message = action.payload.message
      state.isOpen = true
    },
    // Toast を閉じる action。payload は不要
    onToastClose: (state) => {
      state.isOpen = false
    },
  },
})

// slice で定義した action creator をエクスポート
export const { onToastOpen, onToastClose } = toastSlice.actions

// この slice の reducer をデフォルトエクスポート
// store の root reducer で結合して使う
export default toastSlice.reducer
