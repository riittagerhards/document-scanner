import React, { useState } from 'react';
import styles from './Documents.module.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import SearchBar from '../../components/SearchBar/SearchBar';
import getDocuments from '../../utils/GetDocuments';
import DocPreview from '../../components/DocPreview/DocPreview';
import { Link } from 'react-router-dom';

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
        {!filteredDocuments && <span>...loading...</span>}
        {filteredDocuments?.length === 0 && <span>no documents</span>}
        {filteredDocuments?.map((document) => (
          <DocPreview
            title={document.title}
            text={document.text}
            key={document.id}
          />
        ))}
      </div>
      <Link className={styles.link} to="/">
        Home
      </Link>
    </div>
  );
}

export default Documents;
