import React, { useEffect, useState } from 'react';
import styles from './Documents.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import getDocuments from '../../utils/GetDocuments';
import DocPreview, { Document } from '../../components/DocPreview/DocPreview';

function Documents(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);

  useEffect(() => {
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <PageTitle header={'Documents'} />
        <SearchBar />
      </div>
      <div>
        {documents?.slice(0, 5).map((document) => (
          <DocPreview
            title={document.title}
            text={document.text}
            key={document.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Documents;
