import React from 'react';
import styles from './Documents.module.css';
import DocPreview from '../../components/DocPreview/DocPreview';
import SearchBar from '../../components/SearchBar/SearchBar';

function Documents(): JSX.Element {
  return (
    <div className={styles.container}>
      <SearchBar />
      <DocPreview title={'mein title'} text={'mein text'} />
    </div>
  );
}

export default Documents;
