import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from './SearchIcon.svg';

type OnSearchProps = {
  onSearch: (value: string) => void;
};

function SearchBar({ onSearch }: OnSearchProps): JSX.Element {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search"
        className={styles.textInput}
        onChange={(event) => {
          event.preventDefault();
          onSearch(event.target.value);
        }}
      ></input>
      <button className={styles.button}>x</button>
      <img src={SearchIcon} className={styles.icon} />
    </div>
  );
}
export default SearchBar;
