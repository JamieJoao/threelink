import { ReactNode } from 'react'

import styles from './Phone.module.sass'

interface Props {
  children?: ReactNode
}

export const Phone = ({ children }: Props) => {
  return (
    <div className={styles.phone}>
      <div className={styles.phone_container}>
        {children}
      </div>
    </div>
  )
}
