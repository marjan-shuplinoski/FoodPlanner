export async function updateFood(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify(updates)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Update food failed');
  return data;
}

export async function deleteFood(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Delete food failed');
  return data;
}
// Food API service for frontend
var API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
API_URL += '/food'; // Ensure the base URL points to the food API
import { getToken } from './auth';

export async function addFood({ date, time, description }) {
  const res = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify({ date, time, description })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Add food failed');
  return data;
}

export async function getFoodsByDate(date) {
  const res = await fetch(`${API_URL}/date/${date}`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Fetch foods failed');
  return data;
}

export async function getFoods() {
  const res = await fetch(`${API_URL}/`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Fetch foods failed');
  return data;
}
