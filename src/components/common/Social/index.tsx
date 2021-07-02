import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Social.module.sass'
import { useProfile } from 'hooks'

export const Social = () => {
  const { links } = useProfile()

  return (
    <div className={styles.social}>
      <ul className={styles.social_list}>
        {
          links
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
      </ul>
    </div>
  )
}
