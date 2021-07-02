import { ChangeEvent } from 'react'
import cn from 'classnames'

import styles from './Input.module.sass'

interface Props {
  placeholder?: string
  spacing?: boolean
  value?: string
  onChange?: (value: string) => void
}

export const Input = ({ placeholder, spacing, value, onChange }: Props) => {
  const classNames = cn(
    styles.input,
    {
      [styles.input_spacing]: spacing
    }
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.call(null, event.target.value)
  }

  return (
    <div className={classNames}>
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  )
}
