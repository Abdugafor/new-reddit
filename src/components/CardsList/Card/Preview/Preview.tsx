import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/userupload/6594752/file/original-cdb31bcfd02bbfb9bad0d657f3e0068f.png?compress=1&resize=450x338&vertical=top"
          alt="avatar"
        />
      </div>
  );
}
