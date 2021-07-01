import cn from 'classnames'

import styles from './Input.module.sass'

interface Props {
  placeholder?: string
  spacing?: boolean
}

export const Input = ({ placeholder, spacing }: Props) => {
  const classNames = cn(
    styles.input,
    {
      [styles.input_spacing]: spacing
    }
  )

  return (
    <div className={classNames}>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}
