import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import TitleImage from '../../components/TitleImage/TitleImage';
import styles from './Scan.module.css';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      {imageUrl ? (
        <img src={imageUrl} className={styles.image} />
      ) : (
        <TitleImage />
      )}
      <ImageInput onUpload={setImageUrl} />
      <button className={styles.scanButton} disabled={imageUrl === null}>
        Scan
      </button>
      <a className={styles.link} href="#">
        Skip and go to documents
      </a>
    </div>
  );
}

export default Scan;
