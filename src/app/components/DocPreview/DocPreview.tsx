import React, { useState } from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  title: string;
  text: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);

  if (!text || text.length <= 30) {
    return (
      <article className={styles.container}>
        <h4>{title}</h4>
        <p className={styles.text}>{text}</p>
      </article>
    );
  } else {
    return (
      <article className={styles.container}>
        <h4>{title}</h4>
        <p className={styles.text}>
          {collapsed ? `${text.substring(0, 30)}...` : text}
          <button onClick={() => setCollapsed(!collapsed)}>
            Read {collapsed ? 'more' : 'less'}
          </button>
        </p>
      </article>
    );
  }
}

export default DocPreview;
