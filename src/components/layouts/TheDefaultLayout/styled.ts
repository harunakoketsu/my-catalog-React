import styled from 'styled-components'

export const StyledDefaultLayout = styled.main`
	width: 100%;
	min-height: calc(100vh - 72px - 48px - 48px - 128px);  //「ヘッダー + 上余白 + フッター + 下余白」を 100vh から引いて、本文の最小高さを決めています。
	margin: ${({ theme }) => theme.spacing['5xl']} 0 ${({ theme }) => theme.spacing['7xl']};
`

//mainの中のコンテンツの幅を決めてる
export const StyledDefaultLayoutInner = styled.div`
	max-width: ${({ theme }) => theme.mediaQuery(1000)};
	//「画面が狭いと縮む、でも1000pxよりは広がらない」設定
	margin: 0 auto;
	width: 100%
`
