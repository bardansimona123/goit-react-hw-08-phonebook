import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../services/api'; // Ajustează calea în funcție de structura ta de proiect
import { setUser } from '../redux/authSlice'; // Asigură-te că ai o acțiune setUser

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const credentials = {
            name,
            email,
            password,
        };

        try {
            const user = await registerUser(credentials);
            console.log('User registered:', user);
            dispatch(setUser(user)); // Trimitere utilizator către Redux
            // Aici poți naviga către o altă pagină sau să arăți un mesaj de succes
        } catch (error) {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
