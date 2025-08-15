import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import App from './App';
import Register from './components/Register';
import Login from './components/Login';


function RegisterWrapper(props) {
  const navigate = useNavigate();
  return <Register {...props} onSuccess={() => navigate('/home')} />;
}

function LoginWrapper(props) {
  const navigate = useNavigate();
  return <Login {...props} onSuccess={() => navigate('/home')} />;
}

function LogoutWrapper(props) {
  const navigate = useNavigate();
  React.useEffect(() => {
    // Remove cookies (simple example, use js-cookie or document.cookie for real apps)
    document.cookie.split(';').forEach((c) => {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
    props.setLoggedIn(false);
    navigate('/');
  }, []);
  return null;
}

const AppRoutes = ({ loggedIn, setLoggedIn }) => (
  <BrowserRouter basename='/DailyPlanner'>
    <Routes>
      <Route path="/" element={<App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/home" element={<App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/register" element={<RegisterWrapper loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/login" element={<LoginWrapper loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/logout" element={<LogoutWrapper setLoggedIn={setLoggedIn} />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
