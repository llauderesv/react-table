import { useState, useEffect, useCallback } from 'react';
import fetch from 'isomorphic-fetch';

// Custom effects in fetching MOCK_DATA.json
// under public folder
export function useMockData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchData = useCallback(() => {
    fetch('./MOCK_DATA.json')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => setError(error.message));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [data, error];
}
