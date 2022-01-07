import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/Form/DogForm';
import Header from '../../components/Header/Header';
import { fetchDogById, updateDog } from '../../services/dogs';

export default function DogEdit() {
  const [selectedDog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <h1>loading</h1>;
  }

  const updateDogValue = (key, value) => {
    selectedDog[key] = value;
    setDog({ ...selectedDog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(selectedDog);
    alert("You've successfully updated your dog");
  };

  return (
    <div>
      <Header />
      <p>
        <DogForm
          selectedDog={{ ...selectedDog }}
          handleSubmit={handleSubmit}
          updateDogValue={updateDogValue}
        />
      </p>
    </div>
  );
}
