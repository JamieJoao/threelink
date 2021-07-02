import { Navbar, Container } from "components/layout"
import { Button, Input, Phone, Select, Tree } from 'components/common'

import styles from './Home.module.sass'

export const HomeView = () => {
  const options = [
    { value: 'linkedin', label: 'Linkedin' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'tiktok', label: 'Tiktok' },
  ]

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
                    <Select options={options} label='Seleccione una Red Social' />
                    <Input placeholder='Url' />
                  </div>

                  <Button icon={['fas', 'trash']} />
                </li>
                <li className={styles.link_input}>
                  <div className={styles.link_input_left}>
                    <Select options={options} label='Seleccione una Red Social' />
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
