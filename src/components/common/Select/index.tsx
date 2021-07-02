import { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

import styles from './Select.module.sass'

const selectRoot = document.querySelector<Element>('#select-root')
const OFFSET = 8

export type SelectOptionsType = { label: string, value: any }

interface Props {
  options: SelectOptionsType[]
  label?: string
  onChange?: (value: String) => void
}

interface StatusState {
  active: boolean
  selected?: SelectOptionsType

}

export const Select = ({ options, label, onChange }: Props) => {
  const selectRef = useRef<HTMLDivElement>()
  const [status, setStatus] = useState<StatusState>({ active: false })
  const [offsets, setOffsets] = useState({ top: 0, left: 0, width: 0 })

  const classNamesMenu = cn(
    styles.select_menu,
    {
      [styles.select_menu_active]: status.active,
    }
  )

  const selectMenu = (
    <div
      className={classNamesMenu}
      style={{
        top: offsets.top,
        left: offsets.left,
        width: offsets.width,
      }}
    >
      <ul className={styles.select_list}>
        {
          options.map(option => (
            <li
              className={styles.select_item}
              key={option.value}
              onClick={() => handleClickItem(option)}
            >
              <span>
                {option.label}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )

  useLayoutEffect(() => {
    setOffsets({
      top: selectRef.current?.offsetTop! + OFFSET,
      left: selectRef.current?.offsetLeft! + OFFSET,
      width: selectRef.current?.clientWidth! - OFFSET * 2,
    })
  }, [])

  const handleClick = () => {
    setStatus({ ...status, active: !status.active })
  }

  const handleClickItem = (option: SelectOptionsType) => {
    onChange?.call(null, status.selected?.value)
    setStatus({ ...status, selected: option, active: false })
  }

  return (
    <>
      <div
        ref={(ref: any) => selectRef.current = ref}
        className={styles.select}
        onClick={handleClick}
      >
        <label className={styles.select_label}>
          {
            !!status.selected
              ? status.selected.label
              : label
          }
        </label>

        <span className={styles.select_arrow}>
          <FontAwesomeIcon icon={status.active ? 'chevron-up' : 'chevron-down'} />
        </span>
      </div>

      {createPortal(selectMenu, selectRoot!)}
    </>
  )
}
