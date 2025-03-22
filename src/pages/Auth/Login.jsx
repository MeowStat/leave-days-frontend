import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Login.css';
import { postLogin } from '../../services/apiService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    let data = postLogin({ username, password });
    console.log(data);
    // Mock login logic with specific credentials
    setTimeout(() => {
      if ((username === 'admin' && password === '123456') || 
          (username === 'user' && password === '123456')) {
        const userData = {
          name: username === 'admin' ? 'Admin User' : 'Regular User',
          token: 'mock-jwt-token',
          role: username === 'admin' ? 'admin' : 'user'
        };
        login(userData);
        if (username === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-illustration">  
        <div className="illustration-content">
          <h1>Leave Management System</h1>
          <p>Manage your time off requests efficiently</p>
          <div className="illustration-image"></div>
        </div>
      </div>
      
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <div className="login-header">
            <div className="app-logo">
              <span className="logo-icon">📅</span>
            </div>
            <h2>Welcome Back</h2>
            <p>Please sign in to your account</p>
          </div>
          
          {error && (
            <div className="error-message">
              <span className="error-icon">❌</span>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input 
                  id="username"
                  type="text" 
                  placeholder="Enter your username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
              </div>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              {isLoading && <span className="spinner"></span>}
            </button>
          </form>
          <div className="demo-accounts">
            <h3>Demo Accounts</h3>
            <div className="account-card">
              <div className="account-type user">User</div>
              <div className="account-info">
                <div className="account-email">Username: user</div>
                <div className="account-password">Password: 123456</div>
              </div>
            </div>
            <div className="account-card">
              <div className="account-type admin">Admin</div>
              <div className="account-info">
                <div className="account-email">Username: admin</div>
                <div className="account-password">Password: 123456</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
