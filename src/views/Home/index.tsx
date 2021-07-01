import { Navbar, Container } from "components/layout"
import { Button, Input, Phone, Tree } from 'components/common'

import styles from './Home.module.sass'

export const HomeView = () => {
  return (
    <>
      <Navbar />

      <Container className={styles.home_container}>
        <div className={styles.home_panel}>
          <div className={styles.panel_container}>

            <Button title='Agregar Nuevo Link' />

            <div className={styles.panel_links}>
              <ul>
                <li className={styles.link_input}>
                  <div className={styles.link_input_left}>
                    <Input placeholder='Título' spacing />
                    <Input placeholder='Url' />
                  </div>

                  <Button icon={['fas', 'trash']} />
                </li>
                <li className={styles.link_input}>
                  <div className={styles.link_input_left}>
                    <Input placeholder='Título' spacing />
                    <Input placeholder='Url' />
                  </div>

                  <Button icon={['fas', 'trash']} />
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className={styles.home_phone}>
          <Phone>
            <Tree rounded />
          </Phone>
        </div>
      </Container>
    </>
  )
}
