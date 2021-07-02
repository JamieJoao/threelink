import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

import { SelectOptionsType } from 'types/types'

import styles from './Select.module.sass'

const selectRoot = document.querySelector<Element>('#select-root')
const OFFSET = 8

interface Props {
  options: SelectOptionsType[]
  label?: string
  value?: SelectOptionsType
  onChange?: (value: SelectOptionsType) => void
}

interface StatusState {
  active: boolean
  selected?: SelectOptionsType | null

}

export const Select = ({ options, label, value, onChange }: Props) => {
  const selectRef = useRef<HTMLDivElement>()
  const [status, setStatus] = useState<StatusState>({ active: false })
  const [offsets, setOffsets] = useState({ top: 0, left: 0, width: 0 })
  const classNames = cn(
    styles.select,
    {
      [styles.select_available]: !!status.selected,
      [styles.select_active]: status.active,
    }
  )
  const classNamesMenu = cn(
    styles.select_menu,
    { [styles.select_menu_active]: status.active }
  )

  useEffect(() => {
    if (value) {
      handleClickItem(value, false)
    }
  }, [])

  useLayoutEffect(() => {
    setOffsets({
      top: selectRef.current?.offsetTop! + OFFSET,
      left: selectRef.current?.offsetLeft! + OFFSET,
      width: selectRef.current?.clientWidth! - OFFSET * 2,
    })
  }, [])

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
          options.map(option => {
            const isSelected = option.value === status.selected?.value

            return (
              <li
                className={`${styles.select_item} ${isSelected ? styles.select_item_selected : ''}`}
                key={option.value}
                onClick={() => handleClickItem(option)}
              >
                <span>
                  {option.label}
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

  const handleClick = () => {
    setStatus({ ...status, active: !status.active })
  }

  const handleClickItem = (option: SelectOptionsType, launchOnChange = true) => {
    if (launchOnChange) onChange?.call(null, option)
    setStatus({
      ...status,
      selected: option.value
        ? option
        : null
      ,
      active: false
    })
  }

  return (
    <>
      <div
        ref={(ref: any) => selectRef.current = ref}
        className={classNames}
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
