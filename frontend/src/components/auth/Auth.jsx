import './Auth.css';
import { Outlet } from 'react-router-dom';

export function Auth() {
    return (
        <div className="auth-container">
            <h2>Welcome to Auth</h2>
            <Outlet />
            <a href="http://localhost:3001/api/auth/logout">logout</a>
        </div>
    );
}
