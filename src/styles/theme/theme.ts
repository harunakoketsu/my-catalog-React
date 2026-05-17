const THEME_COLOR = {
  base: '#FFF6F1',
  main: '#F3E2D6',
  accent: '#FF6A2B',
  accentSoft: '#FF8A5B',
  black: '#1E1E1E',
  white: '#FFFFFF',
  red: '#FF3B30',
  success: '#22C55E',
  overlay: 'rgba(64, 64, 64, 40%)',
  transparent: 'transparent',
}

const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
  '7xl': '128px',
}

const FONT_SIZE = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
}

const LINE_HEIGHT = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '32px',
  '2xl': '36px',
}

const theme = {
  // 使うときtheme.color.accent みたいになる
  color: THEME_COLOR,
  // つかうときtheme.font('md')
  font: (size: keyof typeof FONT_SIZE = 'xs') => {
    return {
      fontSize: FONT_SIZE[size],
      lineHeight: LINE_HEIGHT[size],
      fontWeight: 'normal',
    }
  },
  // -を含むキー名（ブラケット記法）は、そのままだと識別子として使えないので文字列キー''にします。
  // 使う時theme['font-b']('md')
  'font-b': (size: keyof typeof FONT_SIZE = 'xs') => {
    return {
      fontSize: FONT_SIZE[size],
      lineHeight: LINE_HEIGHT[size],
      fontWeight: 'bold',
    }
  },
  spacing: SPACING,

  // 使う時theme['border-radius'].rounded}
  // 使う時theme['border-radius']['rounded-md']
  'border-radius': {
    //borderRadius という記述なら’’で囲わなくていい。
    rounded: '4px',
    'rounded-md': '8px',
    full: '9999px', //9999px は「最大値」ではなく、十分大きい値を入れて常に丸くするための慣習値
  },
  //2重影
  'box-shadow': '0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 4px 6px 0px rgba(0, 0, 0, 0.1)',

  // 使う時theme['grid-layout'](2)
  // 何マス分か
  'grid-layout': (col = 3) => {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
    }
  },
  // 何ます分使うか
  'col-span': (col = 1) => {
    return {
      gridColumn: `span ${col} / span ${col}`,
    }
  },
  'row-span': (row = 1) => {
    return {
      gridRow: `span ${row} / span ${row}`,
    }
  },
  mediaQuery: (val: number, width = 1280, unit = 'vw', minWidth = 1000) => {
    return `min(calc(${val} / ${width} * 100${unit}), ${minWidth}px)`
    //「画面が狭いと縮む、でも1000pxよりは広がらない」設定
    // min(a, b, ...) は CSS関数で、引数の中で最小の値を採用する構文
    //基準画面（1280）で見たときのvalの占有率を、そのまま各画面幅にスケールして使う
    //val=1000 は「1280pxデザイン上で1000px幅の要素」という意味です。
    //とりあえず、比率を決めたい。でも上限も決めたい。時に入れればいいってことね。
  },
  transition: '.3s cubic-bezier(0.4, 0, 0.2, 1)',
}

export type ThemeColor = typeof THEME_COLOR
export type ThemeSpacing = typeof SPACING
export type ThemeFontSize = typeof FONT_SIZE
export type ThemeLineHeight = typeof LINE_HEIGHT
export type ThemeBorderRadius = typeof theme['border-radius']

export default theme
