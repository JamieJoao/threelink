import cn from 'classnames'

import { Avatar, Social } from 'components/common'
import { useProfile } from 'hooks'

import styles from './Tree.module.sass'

interface Props {
  rounded?: boolean
  full?: boolean
}

export const Tree = ({ rounded, full }: Props) => {
  const { user: { alias, job }, links } = useProfile()
  const classNames = cn(
    styles.tree,
    {
      [styles.tree_full]: full,
      [styles.tree_rounded]: rounded,
    }
  )

  return (
    <div className={classNames}>
      <div className={styles.tree_container}>
        <Avatar />

        <span className={styles.tree_name}>{alias}</span>
        <span className={styles.tree_job}>{job}</span>

        <ul className={styles.tree_list}>
          {
            links
              .map(({ id, name, url }) => (
                <li
                  className={styles.tree_item}
                  key={id}
                >
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    <span>{name}</span>
                  </a>
                </li>
              ))
          }
        </ul>

        <Social />
      </div>
    </div>
  )
}
