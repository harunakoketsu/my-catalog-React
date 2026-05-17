## トースト

アイコン　メッセージ　クローズボタン

使う時
	`<BaseToast status={status} message={message} isOpen={isOpen} onClose={() => dispatch(onToastClose())} />`
sliceのdispatch(onToastClose())使う



flex: 1;は
親（StyledToast）が flex
コンテナなので、その中で余った横幅を全部もらうという指定です。


⏺ inline-flex は inline + flex の組み合わせ

| 値 | 外側（周りとの関係） | 内側（子要素の並び） |
|---|---|---|
| block | 横幅いっぱい占有 | 普通のフロー |
| inline | 文字と同じように並ぶ | 普通のフロー |
| flex | 横幅いっぱい占有 | flex で子を並べる |
| inline-flex | 文字と同じように並ぶ | flex で子を並べる |

閉じるボタン（button）の中にアイコン SVG を中央揃えにした