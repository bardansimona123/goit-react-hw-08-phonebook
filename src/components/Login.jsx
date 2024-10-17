import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../services/api'; // Importă funcția de login din api
import { setUser } from '../redux/authSlice'; // Asigură-te că ai acțiunea setUser în authSlice

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ email, password });
      dispatch(setUser(user)); // Actualizează starea utilizatorului în Redux
      // Redirect sau alte acțiuni după login
    } catch (err) {
      setError('Login failed. Please try again.'); // Gestionează erorile
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
