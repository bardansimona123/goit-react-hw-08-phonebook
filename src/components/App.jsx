import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Register from './Register';
import Login from './Login';
import styles from './App.module.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <UserMenu />
      <Navigation />
      {isAuthenticated && (
        <>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={isAuthenticated ? <ContactList /> : <Login />} />
      </Routes>
      
    </div>
  );
};

export default App;
