import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
  <header className={styles.loginHeader}>
    <img className={styles.imgLogo} src="images/logo.png" alt="logo" />
    <h1 className={styles.logoTitle}>Business Card Maker</h1>
  </header>
);

export default Header;