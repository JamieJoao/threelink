import { ReactNode } from 'react'

import styles from './Wrapper.module.sass'

interface Props {
  children?: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return (
    <main className={styles.wrapper}>
      {children}
    </main>
  )
}
