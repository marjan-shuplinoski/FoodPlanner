// Custom hook for fetching foods by date
import { useState, useEffect } from 'react';
import { getFoodsByDate } from '../services/food';
import { getToken } from '../services/auth';

export default function useFoods(date, refreshKey = 0) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!date || !getToken()) return;
    setLoading(true);
    getFoodsByDate(date)
      .then(setFoods)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [date, refreshKey]);

  return { foods, loading, error };
}
