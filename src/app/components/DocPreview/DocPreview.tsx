import React from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  title: string;
  text: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
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

export default DocPreview;
