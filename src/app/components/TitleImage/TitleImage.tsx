import React from 'react';
import styles from './TitleImage.module.css';

function TitleImage() {
  return (
    <div className={styles.container}>
      <h1>Doc Scanner</h1>
      <div className={styles.imageContainer}>
        <svg
          xmlns="TitlePicture.svg"
          viewBox="0 0 24 24"
          fill="var(--color-text-primary)"
        />
      </div>
    </div>
  );
}
export default TitleImage;
