import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/Form/DogForm';
import { fetchDogById, updateDog } from '../../services/dogs';

export default function DogEdit() {
  const [dog, setDog] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

  const updateDogValue = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(dog);
  };

  return (
    <div>
      <h1>
        <DogForm dog={{ ...dog }} handleSubmit={handleSubmit} updateDogValue={updateDogValue} />
      </h1>
    </div>
  );
}
