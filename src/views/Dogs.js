import React from 'react';
import { fetchDogs } from '../services/dogs';
import { useEffect, useState } from 'react';
import DogsList from '../components/DogsList';
import './Dog-View.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  return (
    <div>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <DogsList dogs={dogs} />
        </>
      )}
    </div>
  );
}
