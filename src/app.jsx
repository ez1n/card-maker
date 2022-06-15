import { React } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

export default function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes >
          <Route path='/' exact element={<Login authService={authService} />} />
          <Route path='/maker' element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
