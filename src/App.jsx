import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Home from './pages/Home/Home'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="container">
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} /> : <Navigate to="/" />} />
          <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/" />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/admin" element={isLoggedIn && isAdmin ? <AdminDashboard /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
