import React, { useState } from 'react';
import styles from './Documents.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import getDocuments from '../../utils/GetDocuments';
import DocPreview from '../../components/DocPreview/DocPreview';

function Documents(): JSX.Element {
  const [search, setSearch] = useState('');
  const documents = getDocuments();

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <PageTitle header={'Documents'} />
        <SearchBar onSearch={setSearch} />
      </div>
      <div>
        {filteredDocuments?.slice(0, 5).map((document) => (
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
