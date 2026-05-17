import styled from 'styled-components'
// import {
//   BaseButton,
//   BaseFlexBox,
// } from '@/components/custom'
import {
  BaseButton,
  BaseFlexBox,
  BaseDd,
  BaseHeadingWithBar,
  BaseInternalLink
} from '@/components/bases'
import { ArrowRightIcon } from '@/components/bases/BaseIcons'

export const TopBox = styled.div`
  position: relative;
  z-index: 1;
  margin-top: -100px;
`

export const EmploymentSelect = styled.div`
  max-width: 224px;
  width: 100%;
`

export const SearchButton = styled(BaseButton)`
  max-width: 128px;
  width: 100%;
`

export const WorkPlace = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 16px;
`

export const AreaBlock = styled.li`
  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  }
`

export const AreaLinkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Occupation = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 24px;
`

export const OccupationBlock = styled.li`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.main};
`

export const OccupationLink = styled(BaseInternalLink)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${OccupationBlock} & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

export const Requirement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${({ theme }) => theme.spacing['3xl']};
  column-gap: ${({ theme }) => theme.spacing['4xl']};
`

export const OccupationDescription = styled(BaseDd)`
  margin-top: ${({ theme }) => theme.spacing.md};
  /* 下の４つセットで文字を...で省略できる 2行表示 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

`

export const SectionHeaderRow = styled(BaseFlexBox)`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  justify-content: space-between;
`

export const InlineHeadingWithBar = styled(BaseHeadingWithBar)`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  ${SectionHeaderRow} & {
    margin-bottom: 0;
  }
`

export const InlineMoreLink = styled(BaseInternalLink)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`


export const InputBox = styled.div`
  width: 100%;
  max-width: 250px;
  height: 40px;
  min-width: 0;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme['border-radius'].rounded};
  border: 1px solid ${({ theme }) => theme.color.main};
  background-color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font('md')}
  color: ${({ theme }) => theme.color.black};
  cursor: text;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  input {
    border: none;
    background: transparent;
    ${({ theme }) => theme.font('md')};
    color: ${({ theme }) => theme.color.black};
    cursor: pointer;

    &::placeholder {
      color: ${({ theme }) => theme.color.main};
    }

    &:focus {
      outline: none;
    }
  }
`

export const KeywordInputBox = styled(InputBox)`
  max-width: 352px;

  input {
    cursor: text;
  }
`

export const ContentWrap = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing['5xl']};
  font-size: ${({ theme }) => theme.font('md').fontSize};
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const AreaList = styled.ul`
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: ${({ theme }) => theme['border-radius'].rounded};
  height: 290px;
  overflow-y: scroll;
  font-size: ${({ theme }) => theme.font('sm').fontSize};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.main};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.accent};
    border-radius: 8px;
  }

  li {
    padding: ${({ theme }) => theme.spacing.lg};
    border-bottom: 1px solid ${({ theme }) => theme.color.main};
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
  }
`

export const PrefList = styled(AreaList)`

  &.is-empty {
        //「地域を選択してください」を真ん中にしたいから
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;  //中央配置の邪魔になる余白を消す
    overflow: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
export const PrefListPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
`

export const ArrowIconWrapper = styled(ArrowRightIcon)`
  flex: 0 0 auto; 
  display: flex;
  align-items: center;
`;


