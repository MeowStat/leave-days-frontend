import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export const AdminRoute = () => {
  const { currentUser, isAdmin } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return isAdmin() ? <Outlet /> : <Navigate to="/" />;
};

export const NonAdminRoute = () => {
  const { currentUser, isAdmin } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return !isAdmin() ? <Outlet /> : <Navigate to="/admin" />;
};
