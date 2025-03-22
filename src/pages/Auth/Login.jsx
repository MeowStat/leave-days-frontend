import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ setIsLoggedIn, setIsAdmin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Mock login logic with specific credentials
    if ((email === 'admin@example.com' && password === '123456') || 
        (email === 'a@gmail.com' && password === '123456')) {
      setIsLoggedIn(true);
      
      // Check if user is admin
      if (email === 'admin@example.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <div className="mock-credentials">
        <p>Mock Credentials:</p>
        <p>Regular user: a@gmail.com / 123456</p>
        <p>Admin user: admin@example.com / 123456</p>
      </div>
    </div>
  );
}

export default Login;
