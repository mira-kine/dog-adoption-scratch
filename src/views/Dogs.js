import React from 'react';
import { fetchDogs } from '../services/dogs';
import { useEffect, useState } from 'react';
import DogsList from '../components/DogsList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <DogsList dogs={dogs} />
    </div>
  );
}
