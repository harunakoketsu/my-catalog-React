import type { ComponentPropsWithRef } from 'react'
import type { ThemeColor } from '@/styles/theme/theme'

export interface IconProps extends Omit<ComponentPropsWithRef<'svg'>, 'fill'> {
  fill?: keyof ThemeColor
}
