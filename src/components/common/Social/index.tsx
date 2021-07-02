import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useProfile } from 'hooks'
import { parameters } from 'constants/index'

import styles from './Social.module.sass'

export const Social = () => {
  const { links } = useProfile()

  return (
    <div className={styles.social}>
      <ul className={styles.social_list}>
        {
          links
            .slice(0, parameters.limitSocial)
            .map(({ id, icon, url }: any) => (
              <li
                key={id}
                className={styles.social_item}
              >
                <a href={url} target='__blank'>
                  <FontAwesomeIcon icon={['fab', icon]} />
                </a>
              </li>
            ))
        }

        {
          links.length > parameters.limitSocial && (
            <li className={styles.social_item} >
              <span>
                <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
              </span>
            </li>
          )
        }
      </ul>
    </div>
  )
}
