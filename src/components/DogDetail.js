import React from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

export default function DogDetail({ dog }) {
  return (
    <div className="dog-card">
      <h1>{dog.name}</h1>
      <img src={dog.image}></img>
      <p>
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <p>{dog.bio}</p>

      <Link key={dog.id} to={`/dogs/${dog.id}/edit`}>
        Edit
      </Link>
    </div>
  );
}
