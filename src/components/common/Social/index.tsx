import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Social.module.sass'

export const Social = () => {
  return (
    <div className={styles.social}>
      <ul className={styles.social_list}>
        <li className={styles.social_item}>
          <a href="/#">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li className={styles.social_item}>
          <a href="/#">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
        </li>
        <li className={styles.social_item}>
          <a href="/#">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </li>
      </ul>
    </div>
  )
}
