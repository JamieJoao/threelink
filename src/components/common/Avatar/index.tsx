import styles from './Avatar.module.sass'

export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        src="https://scontent.fpiu2-1.fna.fbcdn.net/v/t1.6435-9/134080445_3598943473522140_7317625741473646394_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ySZsAdlKiJgAX8N21Dm&_nc_ht=scontent.fpiu2-1.fna&oh=67918955616eb0b47fc464a25e188442&oe=60E2ED4A"
        alt="Foto de usuario" />
    </div>
  )
}
