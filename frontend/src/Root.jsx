import React from 'react';
import AppRoutes from './routes.jsx';
import { getToken } from './services/auth.js';

export default function Root() {
  const [loggedIn, setLoggedIn] = React.useState(!!getToken());

  React.useEffect(() => {
    setLoggedIn(!!getToken());
  }, []);

  return <AppRoutes loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}
