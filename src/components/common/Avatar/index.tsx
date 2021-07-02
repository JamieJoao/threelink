import { useProfile } from 'hooks'

import styles from './Avatar.module.sass'

export const Avatar = () => {
  const { user: { photoUrl, fullname } } = useProfile()

  return (
    <div className={styles.avatar}>
      <img
        src={photoUrl}
        alt={`Foto de perfil de ${fullname}`} />
    </div>
  )
}
