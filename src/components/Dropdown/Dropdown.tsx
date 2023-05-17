import React, { useEffect, useState } from 'react';
import styles from './dropdown.css';


interface IDropdownProps {
  button: React.ReactNode,
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleClick = () => {
      if (isOpen === undefined) {
        setIsDropdownOpen(!isDropdownOpen)
      }    
  }

  return (
    <div className={styles.listContainer}>
        <div onClick={handleClick}>
          {  button }
        </div>

        {isDropdownOpen && (
          <div className={styles.listContainer}>
            <div onClick={() => setIsDropdownOpen(false)} className={styles.list}>
              { children }
            </div>
          </div>
        )}

    </div>
  );
}
