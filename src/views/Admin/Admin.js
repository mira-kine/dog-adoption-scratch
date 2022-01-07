import React from 'react';
import DogForm from '../../components/Form/DogForm';
import { useState } from 'react';
import { createDog } from '../../services/dogs';
import Header from '../../components/Header/Header';

export default function Admin() {
  const [selectedDog, setDog] = useState({});

  const updateDogValue = (key, value) => {
    selectedDog[key] = value;
    setDog({ ...selectedDog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(selectedDog);
    if (selectedDog) {
      alert("You've successfully added a dog");
    } else {
      alert('Database request failed, try again');
    }
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
