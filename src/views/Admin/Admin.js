import React from 'react';
import DogForm from '../../components/Form/DogForm';
import { useState } from 'react';
import { createDog } from '../../services/dogs';

export default function Admin() {
  const [selectedDog, setDog] = useState({});

  const updateDogValue = (key, value) => {
    selectedDog[key] = value;
    setDog({ ...selectedDog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(selectedDog);
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
