import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import TitleImage from '../../components/TitleImage/TitleImage';
import styles from './Scan.module.css';
//import { recognizeText, RecognizeProgress } from '../../utils/ocr';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  let content;

  if (text) {
    content = <p>{text}</p>;
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

      {text && <AddDocumentForm text={text} />}

      {!text && progress && (
        <Progress progress={progress.progress * 100} status={progress.status} />
      )}

      {!progress && (
        <button
          className={styles.scanButton}
          disabled={imageUrl === null}
          onClick={() => {
            if (imageUrl) {
              recognize(imageUrl);
            }
          }}
        >
          Scan text
        </button>
      )}
      <a className={styles.link} href="#">
        Skip and go to documents
      </a>
    </div>
  );
}

export default Scan;
