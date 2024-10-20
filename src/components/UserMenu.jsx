import React from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../services/api'; // Importă funcția de logout din api
import { clearUser } from '../redux/authSlice'; // Asigură-te că ai acțiunea clearUser în authSlice
import { useDispatch } from 'react-redux';
import styles from './App.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await logoutUser();
    dispatch(clearUser()); // Șterge utilizatorul din Redux
    // Redirect sau alte acțiuni după logout
  };

  if (!user) {
    return null; // Sau redirecționează către login
  }

  return (
    <div className={styles.logout_section}>
      <p className={styles.user}> {user.email}</p>
      <button className={styles.logout} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
