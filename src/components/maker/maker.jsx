import React from 'react';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    authService
      .logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogoutClick} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;