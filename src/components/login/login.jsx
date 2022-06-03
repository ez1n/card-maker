import React from 'react';
import styles from './login.module.css';

const Login = (props) => (
  <div className={styles.login}>
    <header className={styles.loginHeader}>
      <img className={styles.imgLogo} src="images/logo.png" alt="logo" />
      <h1 className={styles.logoTitle}>Business Card Maker</h1>
    </header>
    <div className={styles.loginBody}>
      <h2 className={styles.loginTitle}>Login</h2>
      <div className={styles.loginBtns}>
        <button className={styles.loginBtn}>Google</button>
        <button className={styles.loginBtn}>Github</button>
        <button className={styles.loginBtn}>ID/PW</button>
      </div>
    </div>
    <footer className={styles.loginFooter}>Code your dream</footer>
  </div>
);

export default Login;