import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
// import {
//   BaseButton,
//   BaseSelect,
// } from '@/components/custom'
import {
  BaseCard,
  BaseFlexBox,
  BaseButton,
  BaseSelect,
  BaseModal,
  BaseModalTitle,
  BaseModalContent,
  BaseModalAction,
  BaseSelectorItem
} from '@/components/bases'
import {
  AccountIcon,
  LocationIcon,
  SearchIcon
} from '@/components/bases/BaseIcons'
import {
  EmploymentSelect,
  InputBox,
  KeywordInputBox,
  SearchButton,
  ContentWrap,
  Column,
  AreaList,
  PrefList,
  PrefListPlaceholder
} from '../styled'
import type { Location, EmploymentStatus } from '@/types/jobs'
import { useJobsTopResponse } from '@/hooks/custom/useJobsTopResponse'
import { useToggle } from '@/hooks/custom/useToggle'


// 検索条件を入力
// モーダルで地域、都道府県を選択
// 送信時にクエリ文字列を作って遷移

const SearchBox = () => {
  const navigate = useNavigate()
  const [selectedEmploymentId, setSelectedEmploymentId] = useState('')  // 雇用形態の現在選択
  const [keyword, setKeyword] = useState('')  //キーワード入力

  const [selectedArea, setSelectedArea] = useState<string | null>(null)  //モーダル内で選択中の地域
  const [selectedPrefecture, setSelectedPrefecture] = useState<string | null>(null)  //モーダル内で選択中の都道府県（仮選択）
  const [confirmedPrefecture, setConfirmedPrefecture] = useState<string | null>(null)  //決定済み都道府県（検索条件として使う） のID?

  const { isOpen, open, close } = useToggle(false)  //isOpen: 勤務地モーダル開閉（useToggle）

  const { aggregations } = useJobsTopResponse()
  //ここから locations と employmentStatuses を取り出して検索UIに使う

  const locations = useMemo<Location[]>(() => {
    return aggregations?.locations ?? []
  }, [aggregations])
  //フィルター項目ごとのまとめデータ（選択肢リスト＋件数）
  //「配列参照を安定させる（不要な再レンダリング回避）」目的
  // const locations = aggregations?.locations ?? []これでいいかも。

  const employmentStatuses: EmploymentStatus[] =
    aggregations?.employmentStatuses ?? []
  //雇用形態のリスト


  const regionNames = useMemo(() => {  //地域名一覧
    return locations.map((loc) => loc.regionName)
  }, [locations])
  // useMemoいらないかも
  // map程度は軽い
  // 再レンダリングの原因にもなってない

  const filteredPrefectures = useMemo(() => {  //選択地域に対応する都道府県一覧（右カラム）
    if (!selectedArea) return []
    return locations.find((loc) => loc.regionName === selectedArea)?.prefectures ?? []
  }, [locations, selectedArea])
  //「選択された地域に一致するデータを探して、その都道府県一覧を返す」
  //findは最初に条件に当てはまるもの。{ regionName: "関東", prefectures: [...] },
  // useMemoいらないかも
  // findも軽い
  // パフォーマンス問題にならない

  const confirmedPrefectureName = useMemo(() => {  //確定済み都道府県ID→表示名
    if (!confirmedPrefecture) return ''
    return (
      locations
        .flatMap((loc) => loc.prefectures ?? []) //地域ごとに分かれてる都道府県を全て１つの配列にする
        .find((p) => p.prefectureId === confirmedPrefecture)?.prefectureName ?? ''
    )
  }, [locations, confirmedPrefecture])
  // useMemoいらないかも

  const confirmedRegionId = useMemo(() => {  //確定済み都道府県ID→対応地域ID
    if (!confirmedPrefecture) return ''
    return (
      locations.find((loc) =>
        (loc.prefectures ?? []).some((pref) => pref.prefectureId === confirmedPrefecture)
      )?.regionId ?? ''
    )
  }, [locations, confirmedPrefecture])
  // useMemoいらないかも

  const handleConfirmLocation = () => {
    if (selectedPrefecture) {
      setConfirmedPrefecture(selectedPrefecture)
    }
    close()
  }

  const handleResetLocation = () => {
    setSelectedArea(null)
    setSelectedPrefecture(null)
    setConfirmedPrefecture(null)
    close()
  }

  //「ユーザーが入力して送信するもの」は全部フォーム
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() //フォーム送信の“デフォルトの動き（ページがリロードされる,actionに指定したURLへ飛ぶ）”を止めてる
    const params = new URLSearchParams() //「URLのクエリパラメータ（?key=value）」を扱うためのオブジェクトを作ってる
    const trimmedKeyword = keyword.trim() //キーワード入力の文字の余白を取り除く
    if (selectedEmploymentId) params.set('emp', selectedEmploymentId) //雇用形態の選択があればクエリ追加
    if (confirmedRegionId) params.set('rId', confirmedRegionId)  //選択確定済み地域があればクエリ追加
    if (confirmedPrefecture) params.set('pId', confirmedPrefecture) //決定済み都道府県があればクエリ追加
    if (trimmedKeyword) params.set('kwd', trimmedKeyword) //キーワード入力があればクエリ追加

    const query = params.toString() //中に入ってるパラメータを「URL用の文字列」に変換する name → taro age → 20 を name=taro&age=20 に変換
    navigate(query ? `/jobs/searchResult?${query}` : '/jobs/searchResult')
    //検索条件を入れた時は、検索条件付きの結果ページへ   条件なしの時はただの一覧ページ（全件 or 初期状態）
  }

  return (
    <BaseCard px="4xl" py="2xl">
      <BaseFlexBox el="form" flexDirection="row" columnGap="2xl" onSubmit={handleSubmit} noValidate>
        {/* ブラウザの「自動バリデーション」を無効にする */}
        <EmploymentSelect>
          {/* //雇用形態 */}
          <BaseSelect
            name="employment"  // フォーム用のキー（今は実質あまり使ってない）
            options={employmentStatuses.map((s) => ({ value: s.employmentId, label: s.name }))}//雇用形態のリストをoptionの形でリストアップ
            placeholder="雇用形態" //中で {placeholder && <option value="">{placeholder}</option>}とoptionタグへ変換
            value={selectedEmploymentId} //今選ばれているoptionのvalueをいれる
            onChange={(e) => setSelectedEmploymentId(e.target.value)}
          >
            <AccountIcon />
          </BaseSelect>
        </EmploymentSelect>
        <div>{/* //勤務地 */}
          <InputBox onClick={open}>
            {/* const open = useCallback(() => setIsOpen(true), []) */}
            <LocationIcon />
            <input
              placeholder="勤務地"
              readOnly  //モーダルだから入力できないようにしてる。
              value={confirmedPrefectureName}
            />
          </InputBox>
          {/* モーダルの中身は共通コンポーネント化できる */}
          <BaseModal isOpen={isOpen} onClose={close}>
            {/* //モーダルの外観 中身はchildrenにしてる */}
            {/* 以下 BaseModalの{children} */}
            <BaseModalTitle>勤務地</BaseModalTitle>{/* //タイトル */}
            <BaseModalContent>
              <ContentWrap>
                <Column>
                  <h3>地域を選択</h3>
                  <AreaList>
                    {regionNames.map((area) => (
                      <BaseSelectorItem
                        key={area}  //都道府県名なのでmapはかぶらないのでareaでOK
                        isSelected={selectedArea === area}
                        onClick={() => {
                          setSelectedArea(area)
                          setSelectedPrefecture(null)
                        }}
                      >
                        {area}
                      </BaseSelectorItem>
                    ))}
                  </AreaList>
                </Column>
                <Column>
                  <h3>都道府県を選択</h3>
                  <PrefList className={!selectedArea ? 'is-empty' : undefined}>
                    {/* //classNameはCSSでいうclassのこと。JsではclassName */}
                    {selectedArea ? (
                      filteredPrefectures.map((pref) => (
                        <BaseSelectorItem
                          key={pref.prefectureId}
                          isSelected={selectedPrefecture === pref.prefectureId}
                          onClick={() => setSelectedPrefecture(pref.prefectureId)}
                        >
                          {pref.prefectureName}
                        </BaseSelectorItem>
                      ))
                    ) : (
                      <PrefListPlaceholder>地域を選択してください。</PrefListPlaceholder>
                    )}
                  </PrefList>
                </Column>
              </ContentWrap>
            </BaseModalContent>
            <BaseModalAction direction="center" gapX="4xl">
              <BaseButton type="button" variant="outlined" width="160px" onClick={handleResetLocation}>
                リセット
              </BaseButton>
              <BaseButton type="button" width="160px" onClick={handleConfirmLocation}>
                決定
              </BaseButton>
            </BaseModalAction>
          </BaseModal>
        </div>
        <KeywordInputBox>
          <SearchIcon />
          <input
            placeholder="キーワード"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </KeywordInputBox>
        <SearchButton>検索</SearchButton>
        {/* // button はデフォルトで type="submit" */}
      </BaseFlexBox>
    </BaseCard>
  )
}

export default SearchBox
