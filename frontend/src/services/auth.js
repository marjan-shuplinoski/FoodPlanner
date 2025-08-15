// JWT Auth Service for DailyPlanner Frontend

var API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
API_URL += '/auth';
export async function register(email, password) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Registration failed');
  if (data.token) localStorage.setItem('jwt_token', data.token);
  return data;
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Login failed');
  if (data.token) localStorage.setItem('jwt_token', data.token);
  return data;
}

export function logout() {
  localStorage.removeItem('jwt_token');
}

export function getToken() {
  return localStorage.getItem('jwt_token');
}
