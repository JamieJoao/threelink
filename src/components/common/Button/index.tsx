import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

import styles from './Button.module.sass'

interface Props {
  title?: string
  icon?: IconProp
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({ title, icon, disabled, onClick }: Props) => {
  const isIcon = !!icon
  const classNames = cn(
    styles.button,
    {
      [styles.button_icon]: isIcon,
      [styles.button_disabled]: disabled,
    }
  )

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {
        isIcon
          ? <FontAwesomeIcon icon={icon!} />
          : <span>{title}</span>
      }
    </button>
  )
}
