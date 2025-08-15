import React from 'react';



import { getToken } from '../services/auth';

const DatePicker = ({ value, onDateChange }) => {
  if (!getToken()) {
    return (
      <div className="alert alert-info mb-3">
        <strong>Planner</strong> — Select Day is available after login. Use this app to plan your daily tasks, shopping, and more!
      </div>
    );
  }
  const handleChange = (e) => {
    if (onDateChange) onDateChange(e.target.value);
  };
  return (
    <div className="mb-3">
      <label htmlFor="datepicker" className="form-label">Select Day</label>
      <input type="date" id="datepicker" className="form-control" value={value} onChange={handleChange} />
    </div>
  );
};

export default DatePicker;
