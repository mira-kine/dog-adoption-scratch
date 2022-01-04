import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchDogById } from '../services/dogs';
import DogDetail from '../components/DogDetail';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);
  return (
    <div>
      <DogDetail dog={dog} />
    </div>
  );
}
