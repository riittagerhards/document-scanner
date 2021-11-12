import React from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = {
  title: string;
  text: string;
};

export default function DocPreview({
  title,
  text,
}: DocPreviewProps): JSX.Element {
  return (
    <div className={styles.card}>
      <article className={styles.container}>
        <h3>{title}</h3>
        <p className={styles.text}>{text}</p>
      </article>
      <article className={styles.container}>
        <h3>{title}</h3>
        <p className={styles.text}>{text}</p>
      </article>
    </div>
  );
}
