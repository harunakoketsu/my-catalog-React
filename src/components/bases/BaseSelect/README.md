## <select>

# 使用方法
  <BaseSelect required options={...} />   // 必須にしたい時
  <BaseSelect options={...} />            // 任意の時
  必須にした時は
  {placeholder && <option value="" disabled>{placeholder}</option>} disabled


  `{children && <StyledSelectChildren>{children}</StyledSelectChildren>}`について
  children はラベル的なテキストで selectの左側に小さく添えるもので、選択肢（options）とは別物。

  実際の見た目のイメージ：
  [ 雇用形態 | 正社員 ▼ ]
    ↑children  ↑optionsで選ぶ値




基本のCSS型
```html
<select> //プルダウン本体
  <option value="" disabled selected>選択してください</option>

  <optgroup label="エンジニア">  //option のグループ化使わないことも多い  label=グループ名
    <option value="frontend">フロントエンド</option>  //選択肢  value=内部値
    <option value="backend">バックエンド</option>
  </optgroup>

  <optgroup label="デザイナー">
    <option value="ui-designer">UIデザイナー</option>
</select>
```

optionをpropsで渡すように設定
optgroupは今回未設定


```tsx
<select name="occupation">
  <option value="frontend">フロントエンド</option>
  <option value="backend">バックエンド</option>
</select>
```