import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h2>Where in the world?</h2>
      </div>
    </header>
  );
};

export default Header;
