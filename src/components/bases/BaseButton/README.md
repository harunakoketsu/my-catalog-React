## ベースのButton

# 使用方法

| Props | 説明 |
|---|---|---|
| variant | ボタンの見た目の種類 |
| bgColor | 背景色を指定 |
| isLoading | ローディング中かどうか・ローディングの見た目にする |
| width | ボタンの幅 |

| 元々持ってるProps | 説明 |
|---|---|
| onClick | クリック時処理 |
| disabled | 無効化 |
| type | `button` / `submit` / `reset` |
| children | 中身 |
| className | クラス名 |
| style | インラインスタイル |
| aria-* | アクセシビリティ属性 |



記述について

```
interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'text' | 'contained' | 'outlined'
  bgColor?: keyof ThemeColor
  isLoading?: boolean
  width?: CSSProperties['width']
}
```
propsを使う側で書いても書かなくてもOK

```
const BaseButton: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  bgColor = 'accent',
  isLoading = false,
  ...prop
}) => 
```
初期値を設定してるので
styledで記述が必要

```
export const StyledBaseButton = styled('button').withConfig({
	shouldForwardProp: (prop) => !['variant', 'bgColor', 'isLoading', 'width'].includes(prop),
}) <{
	variant: 'text' | 'contained' | 'outlined'
	bgColor: keyof ThemeColor
	isLoading: boolean
	width?: CSSProperties['width']
} >`
```
styledで型指定しているため
propsに記述必要
```
    <StyledBaseButton
      variant={variant}
      bgColor={bgColor}
      isLoading={isLoading}
      {...prop}>
```
