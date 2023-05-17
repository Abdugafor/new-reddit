import React from 'react';
import styles from './menu.css';
import MenuIcon from '../../../icons';

export function Menu() {
  return (
    <div className={styles.menu}>
        <button className={styles.menutButton}>
            <MenuIcon/>
        </button>
      </div>
  );
}
