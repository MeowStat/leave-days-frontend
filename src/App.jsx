import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Home/Home'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import { AuthProvider } from './contexts/AuthContext'
import { AdminRoute, NonAdminRoute } from './components/ProtectedRoutes/ProtectedRoutes'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route element={<NonAdminRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
            
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
