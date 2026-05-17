##　フレックスの塊を作りたい時に使う箱

styled
```ts
  backGroundColor?: CSSProperties['backgroundColor'] // 背景色
  marginBottom?: keyof ThemeSpacing // 下の外余白（テーマ値）
  marginTop?: keyof ThemeSpacing // 上の外余白（テーマ値）
```
  この辺は入れるか要検討。。。


  「el に応じて props
  の型も変わる」を完全に型安全にしようとすると、ジェネリクスを使った複雑な実装が
  必要になる
    noValidate?: boolean 
    form要素として使うときにブラウザのバリデーションを無効化するためにいれてるが
    
