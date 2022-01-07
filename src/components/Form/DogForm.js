import React from 'react';
import './Form.css';

// age, bio, breed, name, image
export default function DogForm({ selectedDog, updateDogValue, handleSubmit }) {
  return (
    <>
      <div className="form-container">
        <form className="dog-form">
          <h1>Dog Create/Edit Form</h1>
          <label>Name:</label>
          <input
            placeholder="name"
            value={selectedDog.name}
            name="name"
            type="text"
            onInput={(e) => updateDogValue('name', e.target.value)}
          ></input>
          <label>Age:</label>
          <input
            value={selectedDog.age}
            placeholder="age"
            name="age"
            type="text"
            onInput={(e) => updateDogValue('age', e.target.value)}
          ></input>
          <label>Breed:</label>
          <input
            value={selectedDog.breed}
            placeholder="breed"
            name="breed"
            type="text"
            onInput={(e) => updateDogValue('breed', e.target.value)}
          ></input>
          <label>Image:</label>
          <input
            value={selectedDog.image}
            placeholder="image"
            name="image"
            type="text"
            onInput={(e) => updateDogValue('image', e.target.value)}
          ></input>
          <label>Bio:</label>
          <input
            value={selectedDog.bio}
            placeholder="bio"
            name="bio"
            type="text"
            onInput={(e) => updateDogValue('bio', e.target.value)}
          ></input>
          <button className="submit-button" onClick={handleSubmit}>
            Add Dog
          </button>
        </form>
      </div>
    </>
  );
}
