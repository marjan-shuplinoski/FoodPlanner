

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


import { useNavigate } from 'react-router-dom';

const Login = ({ auth, onSuccess }) => {
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const isAuth = auth ? auth.isAuthenticated : false;
  React.useEffect(() => {
    if (isAuth) navigate('/home');
  }, [isAuth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await auth.loginUser(email, password);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="w-100" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
  <Navbar auth={auth} />
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
