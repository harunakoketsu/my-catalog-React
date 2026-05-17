import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// 認証状態を保持する slice の state の型定義
export interface AuthState {
  isLogin: boolean | null
  // isLogin はログイン状態。true / false / null の 3 値を扱う。
  // null は「まだ認証確認が終わっていない」状態を表す。
}

// slice の初期状態
const initialState: AuthState = {
  isLogin: null,
}

export const authSlice = createSlice({
  name: 'auth',//slice の名前.キー名とは別。action typeのプレフィックスになる。
  initialState,
  reducers: {
    // setLogin は認証状態を更新する action
    // payload には true または false が入る
    setLogin: (state, action: PayloadAction<boolean>) => {//PayloadAction<boolean> は RTK の型で、action.payload が boolean 型であることを保証。
      state.isLogin = action.payload //state を更新するロジック。
    },
  },
})

// slice で定義した action creator をエクスポート
export const { setLogin } = authSlice.actions

// この slice の reducer をデフォルトエクスポート
// store の root reducer で結合して使う
export default authSlice.reducer
