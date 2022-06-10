import React from 'react';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect } from 'react';


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
      <section className={styles.body}>hello</section>
      <Footer />
    </section>
  );
};

export default Maker;