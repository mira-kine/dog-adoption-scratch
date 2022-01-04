import React from 'react';
import { Link } from 'react-router-dom';

export default function DogsList({ dogs }) {
  return (
    <>
      <div className="container">
        <h1 className="title">Adoptable Friends!</h1>
        <div className="dog-cards-list">
          {dogs.map((dog) => (
            <div className="dog-card" key={dog.id}>
              <h2>Meet {dog.name}</h2>
              <Link key={dog.id} to={`/dogs/${dog.id}`}>
                <img src={dog.image}></img>
              </Link>
              <p>
                {dog.name} is a(n) {dog.age} year old {dog.breed}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
