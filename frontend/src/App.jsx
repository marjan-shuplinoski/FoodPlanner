


import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import FoodForm from './components/FoodForm';
import DatePicker from './components/DatePicker';
import FoodList from './components/FoodList';


import { addFood, updateFood, deleteFood } from './services/food';
import useFoods from './hooks/useFoods';

export default function App({ auth }) {
  const [selectedDate, setSelectedDate] = React.useState('');
  const [refreshKey, setRefreshKey] = React.useState(0);
  React.useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setSelectedDate(today);
  }, []);

  const { foods, loading, error } = useFoods(selectedDate, refreshKey);

  // Add food handler
  const handleAddFood = async (food) => {
    await addFood(food);
    setRefreshKey(k => k + 1);
  };

  // Update food handler
  const handleUpdateFood = async (id, updates) => {
    await updateFood(id, updates);
    setRefreshKey(k => k + 1);
  };

  // Delete food handler
  const handleDeleteFood = async (id) => {
    await deleteFood(id);
    setRefreshKey(k => k + 1);
  };

  // Date change handler
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-100" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
  <Navbar auth={auth} />
      <div className="container mt-4">
        <FoodForm onAddFood={handleAddFood} />
  <DatePicker value={selectedDate} onDateChange={handleDateChange} />
        {error && <div className="alert alert-danger">{error}</div>}
        <FoodList foods={foods} loading={loading} disabled={false} onUpdateFood={handleUpdateFood} onDeleteFood={handleDeleteFood} />
      </div>
      <Footer />
    </div>
  );
}
