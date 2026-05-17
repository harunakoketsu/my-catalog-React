import type { FC, ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react'
import { StyledSelectWrapper, StyledSelect, StyledSelectChildren } from './styled'

// これが options の1個分の形
export interface Option {
  label: string  //画面に表示される文字
  value: string  //画面に表示される文字
}

// 
interface SelectProps extends ComponentPropsWithRef<'select'> {
  options: Option[]
  placeholder?: string
}
//optionをプロパティとして渡す

// const BaseSelect = forwardRef<HTMLSelectElement, SelectProps>(
const BaseSelect: FC<SelectProps> = forwardRef(
  //親からDOM（selectタグ）に直接アクセスできるようにする
  ({ children, options, placeholder, ...prop }, ref) => {
    return (
      <StyledSelectWrapper className="arrow">
        {children && <StyledSelectChildren>{children}</StyledSelectChildren>}
        <StyledSelect {...prop} ref={ref}>
          {/* //親から渡されたpropsを全部そのまま渡してる */}
          {placeholder && <option value="" >{placeholder}</option>}
          {/* placeholderっぽくoptionを作ってる。selectにはplaceholderは存在しないから自分で <option value=""> を作ってる */}
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectWrapper>
    )
  }
)

export default BaseSelect


// 自分用・少し実務寄りにするなら👇

// requiredはpropsにする
// placeholderはdisabledにする
// childrenは削る（必要なら別コンポーネント）