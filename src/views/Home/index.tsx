import { Navbar, Container } from "components/layout"
import { Button, Input, Phone, Select, Tree } from 'components/common'
import { ProfileLink } from 'types/responses'
import { useProfile } from 'hooks'

import { SelectOptionsType } from "types/types"

import styles from './Home.module.sass'

export const HomeView = () => {
  const { links, updateLinks } = useProfile()
  const options = [
    { value: '', label: 'Ninguno' },
    { value: 'linkedin', label: 'Linkedin' },
    { value: 'github', label: 'Github' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'tiktok', label: 'Tiktok' },
  ]

  const panelLink = (link: ProfileLink) => {
    const currentOption = options.find(option => option.value === link.icon) || options[0]

    return (
      <li
        className={styles.link_input}
        key={link.id}
      >
        <div className={styles.link_input_left}>
          <Select
            options={options}
            label='Seleccione una Red Social'
            value={currentOption}
            onChange={value => handleChangeSelect(value, link, 'icon')}
          />
          <Input
            placeholder='Url'
            value={link.url}
            onChange={value => handleChangeSelect(value, link, 'url')} />
        </div>

        <Button icon={['fas', 'trash']} onClick={() => handleRemoveLink(link)} />
      </li>
    )
  }

  const handleChangeSelect = (value: string | SelectOptionsType, link: ProfileLink, field: keyof ProfileLink) => {
    if ((typeof value === 'object' && value.value) || field === 'url') {

      const auxLinks: ProfileLink[] = links.map(auxLink => {
        let newLink: ProfileLink = typeof value === 'object'
          ? { ...link, icon: value.value, name: value.label }
          : { ...link, [field]: value }

        return auxLink.id === link.id
          ? newLink
          : auxLink
      })

      updateLinks(auxLinks)

    }
  }

  const handleNewLink = () => {
    const auxLink: ProfileLink = {
      id: new Date().getTime(),
      icon: 'youtube',
      name: 'Youtube',
      url: ''
    }

    updateLinks([
      ...links,
      auxLink,
    ])
  }

  const handleRemoveLink = (link: ProfileLink) => {
    updateLinks(
      links.filter(auxLink => auxLink.id !== link.id)
    )
  }

  return (
    <>
      <Navbar />

      <Container className={styles.home_container}>
        <div className={styles.home_panel}>
          <div className={styles.panel_container}>

            <Button title='Agregar Nuevo Link' onClick={handleNewLink} />

            <div className={styles.panel_links}>
              <ul>
                {
                  links.map(panelLink)
                }
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
