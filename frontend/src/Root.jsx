import React from 'react';
import AppRoutes from './routes.jsx';
import useAuth from './hooks/useAuth';

export default function Root() {
  const auth = useAuth();

  return <AppRoutes auth={auth} />;
}
