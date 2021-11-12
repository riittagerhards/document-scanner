import React from 'react';
import styles from './SearchBar.module.css';
import SearchIcon from './SearchIcon.svg';

function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="search"
        className={styles.textInput}
      ></input>
      <button className={styles.button}>search</button>
      <img src={SearchIcon} className={styles.icon} />
    </div>
  );
}
export default SearchBar;
