//使いまわせるCSSを描く場所
import { css } from "styled-components";

// 三角矢印
export const arrowMixin = css`
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 6px solid #000000;
    border-right: 6px solid #000000;
    border-top: 6px solid #000000;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

// 使い方は${arrowMixin}
