import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import TitleImage from '../../components/TitleImage/TitleImage';
import styles from './Scan.module.css';
import Tesseract from 'tesseract.js';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  let content;

  if (recognizedText) {
    content = <p>{recognizedText}</p>;
  } else if (imageUrl) {
    content = <img src={imageUrl} className={styles.image} />;
  } else {
    content = (
      <>
        <TitleImage />
        <ImageInput onUpload={setImageUrl} />
      </>
    );
  }

  return (
    <div className={styles.container}>
      {content}
      <button
        className={styles.scanButton}
        disabled={imageUrl === null}
        onClick={() => {
          if (imageUrl) {
            Tesseract.recognize(imageUrl, 'eng', {
              logger: (message) => console.log(message.progress),
            }).then((result) => {
              const text = result.data.text;
              setRecognizedText(text);
            });
          }
        }}
      >
        Scan image
      </button>
      <a className={styles.link} href="#">
        Skip and go to documents
      </a>
    </div>
  );
}

export default Scan;
