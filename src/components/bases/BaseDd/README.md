## <dd>のCSS付け
  
  複数箇所で使用なら設定、ないなら不要通常の<dd>を使うほうがいいかも
  
  interface はクラスや他の interface に「実装・継承」させるためのもので、空のまま extends だけするのは「何もしていない」と ESLint が判断してエラーになる。

  type は単純な型の別名なので、ComponentPropsWithRef<'dd'> をそのまま DefineDescriptionPropsという名前で使いたいだけ、と明確に伝わりESLintも許可する。