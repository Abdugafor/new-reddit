import React from 'react';
import styles from './layout.css';


interface Ilayouts {
  children?: React.ReactNode
}
export function Layout({children}: Ilayouts) {
  return (
    <div className={styles.layout}>
      { children }
    </div>
  );
}
