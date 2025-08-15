import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';


function RegisterWrapper({ auth }) {
  const navigate = useNavigate();
  return <Register auth={auth} onSuccess={() => navigate('/home')} />;
}

function LoginWrapper({ auth }) {
  const navigate = useNavigate();
  return <Login auth={auth} onSuccess={() => navigate('/home')} />;
}

function LogoutWrapper({ auth }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    // clear cookies and token
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
    if (auth && auth.logoutUser) auth.logoutUser();
    navigate('/');
  }, [auth, navigate]);
  return null;
}

const AppRoutes = ({ auth }) => (
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<App auth={auth} />} />
      <Route path="/home" element={<App auth={auth} />} />
      <Route path="/register" element={<RegisterWrapper auth={auth} />} />
      <Route path="/login" element={<LoginWrapper auth={auth} />} />
      <Route path="/logout" element={<LogoutWrapper auth={auth} />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
