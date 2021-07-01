import { ReactNode } from 'react'
import cn from 'classnames'

import styles from './Container.module.sass'

interface Props {
  children?: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  const classNames = cn(
    styles.container,
    className,
  )

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}
