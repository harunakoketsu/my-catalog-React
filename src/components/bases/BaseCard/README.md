## ベースの枠　カード型四角

使用方法
  // デフォルト（rounded-md = 8px）
  <BaseCard px="4xl" py="2xl">

  // full（9999px）に変えたい時
  <BaseCard px="4xl" py="2xl" borderRadius="full">

  // rounded（4px）に変えたい時
  <BaseCard px="4xl" py="2xl" borderRadius="rounded">

  borderRadius を省略すれば今まで通り rounded-md
  が当たるので、既存のコードは変更不要です。


px、py 両方 4xl がデフォルト。
  padding: ${({ theme, py, px }) => `${theme.spacing[py ?? '4xl']}
  ${theme.spacing[px ?? '4xl']}`;


Shadowとcolorを設定
