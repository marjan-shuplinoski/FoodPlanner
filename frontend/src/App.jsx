


import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import FoodForm from './components/FoodForm';
import DatePicker from './components/DatePicker';
import FoodList from './components/FoodList';

export default function App({ loggedIn, setLoggedIn }) {
  return (
    <div className="w-100" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className="container mt-4">
        <FoodForm />
        <DatePicker />
        <FoodList disabled={false} />
      </div>
      <Footer />
    </div>
  );
}
