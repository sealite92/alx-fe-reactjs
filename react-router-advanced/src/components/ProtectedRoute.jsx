// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

// Simulated authentication object
const fakeAuth = {
  isAuthenticated: false, // Set this to true to allow access
};

const ProtectedRoute = () => {
  return fakeAuth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
