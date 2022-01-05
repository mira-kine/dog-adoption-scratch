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
      }, 1200);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  return (
    <>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div>
          <DogsList dogs={dogs} />
        </div>
      )}
    </>
  );
}
