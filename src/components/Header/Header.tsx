import React from 'react';
import styles from './header.css';
import { SearchBlock } from './Search-block';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
