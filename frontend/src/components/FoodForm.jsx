import React from 'react';
import { getToken } from '../services/auth';


const FoodForm = ({ onAddFood }) => {
  const getNowDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  };
  const getNowTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };
  const [date, setDate] = React.useState(getNowDate());
  const [time, setTime] = React.useState(getNowTime());
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time && description) {
      onAddFood({ date, time, description });
      setDate(getNowDate());
      setTime(getNowTime());
      setDescription('');
    }
  };

  if (!getToken()) {
    return (
      <div className="alert alert-info mb-4">
        <strong>Planner</strong> — Add Food is available after login. Use this app to plan your daily tasks, shopping, and much more!
      </div>
    );
  }
  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2 align-items-center">
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={e => setDate(e.target.value)}
            placeholder="Date"
          />
        </div>
        <div className="col-md-3">
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={e => setTime(e.target.value)}
            placeholder="Time"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-success w-100">Add Food</button>
        </div>
      </div>
    </form>
  );
};

export default FoodForm;
