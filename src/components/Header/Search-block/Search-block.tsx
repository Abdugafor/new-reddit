import React from 'react';
import styles from './search-block.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      <UserBlock/>
    </div>
  );
}
