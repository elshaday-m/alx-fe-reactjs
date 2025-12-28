// src/hooks/useAuth.js
import { useState } from "react";

const useAuth = () => {
  // Simple auth state (replace with real auth logic if needed)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

export default useAuth;
