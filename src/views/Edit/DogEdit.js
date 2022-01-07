import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/Form/DogForm';
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
    // <Redirect to="/" exact />;
  };

  return (
    <div>
      <h1>
        <DogForm
          selectedDog={{ ...selectedDog }}
          handleSubmit={handleSubmit}
          updateDogValue={updateDogValue}
        />
      </h1>
    </div>
  );
}
