import { useTheme } from 'hooks'

import IconLight from 'assets/icons/light-mode.png'
import IconDark from 'assets/icons/dark-mode.png'
import styles from './ThemeIcon.module.sass'

export const ThemeIcon = () => {
  const { theme } = useTheme()

  return (
    <img
      className={styles.themeIcon}
      src={theme === 'dark' ? IconDark : IconLight}
      alt="Ícono del tema" />
  )
}
