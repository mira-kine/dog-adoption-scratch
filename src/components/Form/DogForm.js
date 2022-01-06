import React from 'react';

// age, bio, breed, name, image
export default function DogForm({ selectedDog, updateDogValue, handleSubmit }) {
  return (
    <>
      <div className="form-container">
        <form>
          <label>
            Name:
            <input
              placeholder="name"
              value={selectedDog.name}
              name="name"
              type="text"
              onInput={(e) => updateDogValue('name', e.target.value)}
            ></input>
          </label>
          <label>
            Age:
            <input
              value={selectedDog.age}
              placeholder="age"
              name="age"
              type="text"
              onInput={(e) => updateDogValue('age', e.target.value)}
            ></input>
          </label>
          <label>
            Breed:
            <input
              value={selectedDog.breed}
              placeholder="breed"
              name="breed"
              type="text"
              onInput={(e) => updateDogValue('breed', e.target.value)}
            ></input>
          </label>
          <label>
            Image:
            <input
              value={selectedDog.image}
              placeholder="image"
              name="image"
              type="text"
              onInput={(e) => updateDogValue('image', e.target.value)}
            ></input>
          </label>
          <label>
            Bio:
            <input
              value={selectedDog.bio}
              placeholder="bio"
              name="bio"
              type="text"
              onInput={(e) => updateDogValue('bio', e.target.value)}
            ></input>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
