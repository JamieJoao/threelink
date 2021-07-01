import { Link } from 'react-router-dom'

import { useTheme } from 'hooks'
import { ThemeIcon } from 'components/common'
import { Container } from 'components/layout'
import { routeNames } from 'constants/index'

import styles from './Navbar.module.sass'

export const Navbar = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className={styles.navbar}>
      <Container className={styles.navbar_container}>
        <div className={styles.navbar_left}>
          <span>tree link</span>
          <span>by Jamie Mendoza</span>
        </div>
        <div className={styles.navbar_right}>
          <ul>
            <li>
              <Link to={routeNames.preview}>Vista Previa</Link>
            </li>
            <li className={styles.toggle_button} onClick={toggleTheme}>
              <span>Modo {theme}</span>
              <ThemeIcon />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
