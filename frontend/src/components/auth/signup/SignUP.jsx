import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function SignUP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        roll_no: '',
        branch: '',
        year: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/auth/register', formData);
            navigate('/auth/sign-in');
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleRegister}>
            <h3>Sign Up</h3>
            {error && <p className="error">{error}</p>}
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="roll_no" placeholder="Roll Number" onChange={handleChange} required />
            <input type="text" name="branch" placeholder="Branch" onChange={handleChange} required />
            <input type="number" name="year" placeholder="Year" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}
