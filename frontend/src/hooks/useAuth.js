// Custom hook for authentication state and helpers
import { useState, useEffect, useCallback } from 'react';
import { getToken, login, logout, register } from '../services/auth';

export default function useAuth() {
  const [token, setToken] = useState(() => getToken());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setToken(getToken());
  }, []);

  // loginUser(email, password) — uses auth service and then reads token from localStorage
  const loginUser = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await login(email, password);
      // prefer token from response, fallback to localStorage
      if (data && data.token) setToken(data.token);
      else setToken(getToken());
      return data;
    } catch (e) {
      setError(e.message || 'Login failed');
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  // registerUser(email, password)
  const registerUser = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(email, password);
      if (data && data.token) setToken(data.token);
      else setToken(getToken());
      return data;
    } catch (e) {
      setError(e.message || 'Registration failed');
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const logoutUser = useCallback(() => {
    logout();
    setToken(null);
  }, []);

  return {
    token,
    loading,
    error,
    isAuthenticated: Boolean(token),
    loginUser,
    registerUser,
    logoutUser,
  };
}
