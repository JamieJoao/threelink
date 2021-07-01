import styles from './Preview.module.sass'

import { Tree } from "components/common"

export const PreviewView = () => {
  return (
    <div className={styles.preview}>
      <Tree />
    </div>
  )
}
