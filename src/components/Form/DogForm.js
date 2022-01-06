import React from 'react';

// age, bio, breed, name, image
export default function DogForm({ dog, updateDogValue, handleSubmit }) {
  return (
    <>
      <div className="form-container">
        <form>
          <input
            value={dog.name}
            name="name"
            type="text"
            onInput={(e) => updateDogValue('name', e.target.value)}
          ></input>
          <input
            value={dog.age}
            placeholder="age"
            name="age"
            type="text"
            onInput={(e) => updateDogValue('age', e.target.value)}
          ></input>
          <input
            value={dog.breed}
            placeholder="breed"
            name="breed"
            type="text"
            onInput={(e) => updateDogValue('breed', e.target.value)}
          ></input>
          <input
            value={dog.image}
            placeholder="image"
            name="image"
            type="text"
            onInput={(e) => updateDogValue('image', e.target.value)}
          ></input>
          <input
            value={dog.bio}
            placeholder="bio"
            name="bio"
            type="text"
            onInput={(e) => updateDogValue('bio', e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
