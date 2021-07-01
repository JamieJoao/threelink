import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import styles from './Social.module.sass'

library.add(faLinkedin)
library.add(faFacebook)
library.add(faInstagram)

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
