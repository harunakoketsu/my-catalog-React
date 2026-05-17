import { useDispatch as useAppDispatch } from 'react-redux'  //react-redux の useDispatch をこのファイル内では useAppDispatch という名前で使う
import type { AppDispatch } from '@/store'

// AppDispatch は store の dispatch 型（action の型チェックに使う）
// これを使うと、dispatch する action の型が自動でチェックされる
const useDispatch: () => AppDispatch = useAppDispatch
// () => AppDispatchこれは型、引数なしでAppDispatchを変えす関数という型

export default useDispatch

//TypeScript の型アノテーション
//useDispatch は React フック で、呼び出すと dispatch 関数を返します。そのため、型を関数型で宣言しています。
// export const useAppDispatch =
// useDispatch.withTypes<AppDispatch>()