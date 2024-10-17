import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Navigation;
