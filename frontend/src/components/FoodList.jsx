

import React from 'react';
import { getToken } from '../services/auth';

const FoodList = ({ foods = [], loading, disabled, onUpdateFood, onDeleteFood }) => {
  const [editId, setEditId] = React.useState(null);
  const [editTime, setEditTime] = React.useState('');
  const [editDescription, setEditDescription] = React.useState('');

  const startEdit = (food) => {
    setEditId(food._id);
    setEditTime(food.time);
    setEditDescription(food.description);
  };

  const handleUpdate = () => {
    if (editId && editTime && editDescription) {
      onUpdateFood(editId, { time: editTime, description: editDescription });
      setEditId(null);
      setEditTime('');
      setEditDescription('');
    }
  };

  if (!getToken()) {
    return (
      <div className="alert alert-info mt-3">
        <strong>Planner</strong> — Your food list will appear here after you log in. Use this app to plan your daily tasks, shopping, and much more!
      </div>
    );
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Date & Time</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr><td colSpan={5}>Loading...</td></tr>
        ) : foods.length === 0 ? (
          <tr><td colSpan={5}>No foods found.</td></tr>
        ) : (
          foods.map(food => (
            <tr key={food._id}>
              <td>{new Date(`${food.date}T${food.time}`).toLocaleString()}</td>
              <td>
                {editId === food._id ? (
                  <input type="text" value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                ) : food.description}
              </td>
              <td>
                {editId === food._id ? (
                  <>
                    <button className="btn btn-success btn-sm me-1" onClick={handleUpdate} disabled={disabled}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)} disabled={disabled}>Cancel</button>
                  </>
                ) : (
                  <button className="btn btn-warning btn-sm" onClick={() => startEdit(food)} disabled={disabled}>Edit</button>
                )}
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => onDeleteFood(food._id)} disabled={disabled}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default FoodList;
