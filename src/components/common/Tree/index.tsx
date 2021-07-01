import cn from 'classnames'

import { Avatar } from 'components/common/Avatar'

import styles from './Tree.module.sass'
import { Social } from '../Social/index';

interface Props {
  rounded?: boolean
}

export const Tree = ({ rounded }: Props) => {
  const classNames = cn(
    styles.tree,
    {
      [styles.tree_rounded]: rounded,
    }
  )

  return (
    <div className={classNames}>
      <Avatar />

      <span className={styles.tree_name}>@JamieJoao</span>
      <span className={styles.tree_job}>Frontend Developer</span>

      <ul className={styles.tree_list}>
        <li className={styles.tree_item}>
          <a href="/#" target='_blank'>
            <span>Linkedin</span>
          </a>
        </li>

        <li className={styles.tree_item}>
          <a href="/#" target='_blank'>
            <span>Linkedin</span>
          </a>
        </li>
      </ul>

      <Social />
    </div>
  )
}
