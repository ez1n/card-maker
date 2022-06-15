import React from 'react';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useEffect, useState } from 'react';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    { 
      id: '1', 
      name: 'yejin', 
      company: 'MyeongJi Univ.', 
      theme: 'light', 
      title: 'Student', 
      message: 'I wish to be a frontend engineer!', 
      email: 'eodrmfdl1004@gmail.com', 
      fileName: 'yj', 
      fileURL: null
    },
    { 
      id: '2', 
      name: 'seungjin', 
      company: 'GangSeo Univ.', 
      theme: 'dark', 
      title: 'Student', 
      message: "I'm a student", 
      email: '*', 
      fileName: 'sj', 
      fileURL: 'sj.png' 
    },
    { 
      id: '3', 
      name: 'gaeun', 
      company: 'Aju Hospital', 
      theme: 'colorful', 
      title: 'Nurse', 
      message: "I'm a nurse", 
      email: '*', 
      fileName: 'ge', 
      fileURL: 'ge.png' 
    },
  ]);

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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;