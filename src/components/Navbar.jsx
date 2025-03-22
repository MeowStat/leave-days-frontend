import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, isAdmin }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Leave Days System</Link>
      </div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/">Home</Link></li>
            {isAdmin && <li><Link to="/admin">Admin Dashboard</Link></li>}
            <li><button className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
