//普通のstyled-componentsは「コンポーネント単位」でCSSを書くけど、これは「全体に適用するCSS」を書くためのもの。
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}  //「リセットCSS」
html, body { overflow-anchor: none; }
  //すべての要素 + 擬似要素に対して適用
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    //すべての要素のborderを一旦リセット
    border-style: solid;
    border-width: 0;
    /*  */
  }

  body{
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.base};
    ${({ theme }) => theme['font']('sm')}
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  a {
    display: inline-block;
    text-decoration: none;
  
    /* &:hover{
      text-decoration: underline;
    } */
    /* &:link {
      color: blue;
    }
    &:visited {
      color: purple;
    } */
  }

  li{
    list-style: none;
  }

  //「フォーム要素（button/input/selectなど）を全部“素のテキスト状態”にリセットしてる」
  button,
  input,
  optgroup,
  select,
  textarea {
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    border: none;
    margin: 0;
    border-radius: 0;
    text-align: inherit;
    text-transform: inherit;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
  /* 操作時のみアウトラインを消す これでキーボードユーザーにはフォーカスが見える状態 */
  
  button:disabled,
  [type="button"]:disabled,
  [type="reset"]:disabled,
  [type="submit"]:disabled {
    cursor: default;
  }

  .body-fixed {
    overflow: hidden;
    /* 要素の中身が枠からはみ出したときに、はみ出した分を表示しない（切り取る）だけど、
     bodyに付けると、ページ全体のスクロールが消える */
    /* class="body-fixed" が付いたタグに効く
    その中身のスクロールを止める */
  }
  .modal-overlay {
    overflow: hidden;
  }
  /* モーダルの中の見た目崩れ・はみ出し制御 */

/* react-skeleton */
  .react-loading-skeleton{
    line-height: inherit;
  }
`

export default GlobalStyle
