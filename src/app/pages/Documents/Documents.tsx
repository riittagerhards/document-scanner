import React from 'react';
import styles from './Documents.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import getDocuments from '../../utils/GetDocuments';
import DocPreview from '../../components/DocPreview/DocPreview';

function Documents(): JSX.Element {
  const documents = getDocuments();

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
