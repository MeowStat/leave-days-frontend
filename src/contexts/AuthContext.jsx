import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// Utility function to get token without context
export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user data exists in localStorage on component mount
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const role = localStorage.getItem('role');
    
    if (token && name && role) {
      setCurrentUser({ name, token, role });
    }
    
    setLoading(false);
  }, []);

  const login = (userData) => {
    // Store user data in localStorage
    localStorage.setItem('name', userData.name);
    localStorage.setItem('token', userData.token);
    localStorage.setItem('role', userData.role);
    
    setCurrentUser(userData);
  };

  const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    
    setCurrentUser(null);
  };

  const isAdmin = () => {
    return currentUser?.role === 'admin';
  };

  const value = {
    currentUser,
    login,
    logout,
    isAdmin,
    getToken: getAuthToken
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
