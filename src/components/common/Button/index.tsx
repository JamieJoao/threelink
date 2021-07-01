import cn from 'classnames'
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import styles from './Button.module.sass'

library.add(faTrash)

interface Props {
  title?: string
  icon?: IconProp
  onClick?: () => void
}

export const Button = ({ title, icon, onClick }: Props) => {
  const isIcon = !!icon
  const classNames = cn(
    styles.button,
    {
      [styles.button_icon]: isIcon
    }
  )

  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      {
        isIcon
          ? <FontAwesomeIcon icon={icon!} />
          : <span>{title}</span>
      }
    </button>
  )
}
