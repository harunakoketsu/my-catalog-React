// 「themeにこういう項目が入ってますよ」とTypeScriptに教えてる

import 'styled-components'
import { ThemeColor, ThemeSpacing, ThemeFontSize } from '@/styles/theme/theme'

// declare moduleは styled-componentsのthemeの型定義
declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeColor
    font: (size: keyof ThemeFontSize) => {
      [key: string]: string
    }
    'font-b': (size: keyof ThemeFontSize) => {
      [key: string]: string
    }
    spacing: ThemeSpacing
    'border-radius': {
      rounded: string
      'rounded-md': string
      full: string
    }
    'box-shadow': string
    'grid-layout': (col?: number) => {
      [key: string]: string
    }
    'col-span': (col?: number) => {
      [key: string]: string
    }
    mediaQuery: (val: number, width?: number, unit?: string, minWidth?: number) => string
    transition: string
  }
}
