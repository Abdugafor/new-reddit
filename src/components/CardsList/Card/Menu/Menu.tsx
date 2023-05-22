import React from 'react';
import styles from './menu.css';
import MenuIcon from '../../../icons';
import { Dropdown } from '../../../Dropdown';
import { Ecolors, Text } from '../../../Text';
import { MenuItemsList } from './MenuItemsList';
export function Menu() {
  return (
    <div className={styles.menu}>
        <Dropdown 
          button={
            <button className={styles.menutButton}>
                <MenuIcon/>
            </button>
          }
        >
          <div className={styles.dropdown}>
              <MenuItemsList postId="123"/> 
              <button className={styles.closeButton}>
                    <Text mobileSize={12} size={14} color={Ecolors.gray66}>
                        Закрыть
                    </Text>
              </button>
          </div>
        </Dropdown>
      </div>
  );
}
