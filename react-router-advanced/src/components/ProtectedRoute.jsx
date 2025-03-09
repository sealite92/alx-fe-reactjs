// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import useAuth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Check authentication status

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
