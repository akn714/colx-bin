import './Auth.css';
import { Outlet } from 'react-router-dom';

export function Auth() {
    return (
        <div className="auth-container">
            <h2>Welcome to Auth</h2>
            <Outlet />
        </div>
    );
}
