import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import PageTitle from '../../components/PageTitle/PageTitle';
import TitleImage from '../../components/TitleImage/TitleImage';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';
import { Link } from 'react-router-dom';

function Scan(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  let content;

  if (text) {
    content = (
      <>
        <PageTitle header={'Doc Scanner'} />
        <p>{text}</p>
      </>
    );
  } else if (imageUrl) {
    content = (
      <>
        <PageTitle header={'Doc Scanner'} />
        <img src={imageUrl} className={styles.image} />
      </>
    );
  } else {
    content = (
      <>
        <PageTitle header={'Doc Scanner'} />
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
      <Link className={styles.link} to="/documents">
        Skip and go to documents
      </Link>
    </div>
  );
}

export default Scan;
