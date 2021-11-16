import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from './SearchIcon.svg';

type OnSearchProps = {
  onSearch: (value: string) => void;
};

function SearchBar({ onSearch }: OnSearchProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search"
        className={styles.textInput}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
      <button className={styles.button}>x</button>
      <img src={SearchIcon} className={styles.icon} />
    </div>
  );
}
export default SearchBar;
