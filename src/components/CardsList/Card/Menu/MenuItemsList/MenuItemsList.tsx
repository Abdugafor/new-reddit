import React from 'react';
import styles from './menuitemslist.css';
import { Ecolors, Text } from '../../../../Text';


interface IMenuItemsListProps {
  postId: string
}
export function MenuItemsList({postId} : IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
        <li className={styles.menuItem} onClick={() => {console.log(postId)}}>
            <Text size={12} color={Ecolors.gray99} >Скрыть</Text>
        </li>

        <div className={styles.divider}></div>

        <li className={styles.menuItem}>

          <Text size={12} color={Ecolors.gray99}>Пожаловаться</Text>
        </li>
    </ul>
  );
}
