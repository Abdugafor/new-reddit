import React, { useState } from 'react';
import styles from './dropdown.css';


interface IDropdownProps {
  button: React.ReactNode,
  children: React.ReactNode
}
export function Dropdown({button, children}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className={styles.listContainer}>
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
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
