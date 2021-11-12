import React, { useEffect, useState } from 'react';
import styles from './DocPreview.module.css';
import getDocuments from './GetDocuments';

type Document = {
  id: number;
  title: string;
  text: string;
};

function DocPreview(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);

  useEffect(() => {
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  return (
    <section>
      {documents &&
        documents.slice(0, 10).map((document) => (
          <article className={styles.container} key={document.id}>
            <h3>{document.title}</h3>
            <p className={styles.text}></p>
          </article>
        ))}
    </section>
  );
}

export default DocPreview;

/*   <div className={styles.card}>
      <article className={styles.container}>
        <h3>{title}</h3>
        <p className={styles.text}>{text}</p>
      </article>
      <article className={styles.container}>
        <h3>{title}</h3>
        <p className={styles.text}>{text}</p>
      </article>
    </div>*/
