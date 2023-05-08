import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img 
            className={styles.avatar}
            src="https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=320x240&vertical=top"
            width='100'
            />
            <a href='#user-url' className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликованно</span>
             4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационнрй деятельности Следует отметить, что новая модель организационнрй деятельности
          </a>
        </h2>
      </div>
  );
}
