import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../services/api'; // Ajustează calea în funcție de structura ta de proiect

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
            // Aici poți face ceva după înregistrare, cum ar fi navigarea către o altă pagină
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
