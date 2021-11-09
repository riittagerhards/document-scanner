import React from 'react';
import styles from './TitleImage.module.css';
import TitlePicture from './TitlePicture.svg';

function TitleImage() {
  return (
    <div className={styles.container}>
      <h1>Doc Scanner</h1>
      <div className={styles.imageContainer}>
        <img className={styles.picture} src={TitlePicture} />
      </div>
    </div>
  );
}
export default TitleImage;
