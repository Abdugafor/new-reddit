import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img 
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=320x240&vertical=top"
            width='100'
            />
            <a href='#user-url' className={styles.username}></a>
          </div>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационнрй деятельности Следует отметить, что новая модель организационнрй деятельности
          </a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/userupload/6594752/file/original-cdb31bcfd02bbfb9bad0d657f3e0068f.png?compress=1&resize=450x338&vertical=top"
          alt="avatar"
        />
      </div>
      <div className={styles.menu}>
        <button className={styles.menutButton}>
          
        </button>
      </div>
      <div className={styles.controls}></div>
    </li>
  );
}
