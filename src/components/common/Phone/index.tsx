import { ReactNode } from 'react'

import styles from './Phone.module.sass'
// import PhoneMock from 'assets/images/phone-mock-copy.png'

interface Props {
  children?: ReactNode
}

export const Phone = ({ children }: Props) => {
  return (
    <div className={styles.phone}>
      {/* <img src={PhoneMock} alt='Mockup de teléfono móvil' /> */}

      <div className={styles.phone_container}>
        {children}
      </div>
    </div>
  )
}
