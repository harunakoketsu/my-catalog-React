//型チェックが強化のためのコード

import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector as useAppSelector } from 'react-redux'
import type { RootState } from '@/store'

// TypedUseSelectorHook<RootState> は、RootState 型付きの useSelector を表す
// これを使うと、state の型が自動で補完・チェックされる
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector

export default useSelector
