import React from 'react';
import styles from './controls.css';

export function Controls() {
  return (
<div className={styles.controls}>
        <div className={styles.karmaCounter}>
            <button className={styles.up}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" fill="black" fill-opacity="0.38"/>
            </svg>

            </button>
            <span className={styles.karmaValue}>234</span>
            <button className={styles.down}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.59 0.59L6 5.17L1.41 0.59L0 2L6 8L12 2L10.59 0.59Z" fill="black" fill-opacity="0.38"/>
            </svg>

            </button>
        </div>

        <button className={styles.commentsButton}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.99 2C19.99 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20L19.99 2Z" fill="black" fill-opacity="0.38"/>
        </svg>  
          <span className={styles.commentsNumber}>13</span>
        </button>

        <div className={styles.actions}>
          <button className={styles.shareButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="black" fill-opacity="0.12"/>
            <path d="M16 14.72C15.4933 14.72 15.04 14.92 14.6933 15.2333L9.94 12.4667C9.97333 12.3133 10 12.16 10 12C10 11.84 9.97333 11.6867 9.94 11.5333L14.64 8.79333C15 9.12667 15.4733 9.33333 16 9.33333C17.1067 9.33333 18 8.44 18 7.33333C18 6.22667 17.1067 5.33333 16 5.33333C14.8933 5.33333 14 6.22667 14 7.33333C14 7.49333 14.0267 7.64667 14.06 7.8L9.36 10.54C9 10.2067 8.52667 10 8 10C6.89333 10 6 10.8933 6 12C6 13.1067 6.89333 14 8 14C8.52667 14 9 13.7933 9.36 13.46L14.1067 16.2333C14.0733 16.3733 14.0533 16.52 14.0533 16.6667C14.0533 17.74 14.9267 18.6133 16 18.6133C17.0733 18.6133 17.9467 17.74 17.9467 16.6667C17.9467 15.5933 17.0733 14.72 16 14.72Z" fill="black" fill-opacity="0.38"/>
          </svg>
          </button>

          <button className={styles.saveButton}>
            
          </button>
        </div>
      </div>
  );
}
