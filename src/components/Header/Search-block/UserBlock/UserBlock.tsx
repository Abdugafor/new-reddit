import React from 'react';
import { Break } from '../../../Break';
import { IconAnon } from '../../../icons';
import { Ecolors, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}
export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
      <a 
      href="https://www.reddit.com/api/v1/authorize?client_id=lmkLkR24lPa2Js5gSYNyEQ&response_type=code&
      state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}>
        <div className={styles.avatarBox}>
          {avatarSrc
            ? <img src={avatarSrc} alt="user avater" className={styles.avatarImgae}/>
            : <IconAnon/>
          }
        </div>

        <div className={styles.username}>
          <Break size={12}/>
          <Text size={20} color={username ? Ecolors.black : Ecolors.gray99}>{username || 'Аноним'}</Text>
        </div>
      </a>
  );  
}
