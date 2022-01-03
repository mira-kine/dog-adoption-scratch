import React from 'react';
import { fetchDogs } from '../services/dogs';
import { useEffect, useState } from 'react';
import DogsList from '../components/DogsList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <DogsList dogs={dogs} />
    </div>
  );
}
