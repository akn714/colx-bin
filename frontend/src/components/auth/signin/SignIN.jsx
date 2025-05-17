import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function SignIN() {
    const [roll_no, setRollNo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'http://localhost:3001/api/auth/login',
                { roll_no, password },
                { withCredentials: true }
            );
            
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleLogin}>
            <h3>Sign In</h3>
            {error && <p className="error">{error}</p>}
            <input type="text" placeholder="Roll Number" value={roll_no} onChange={(e) => setRollNo(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
}
