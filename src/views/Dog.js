import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchDogById } from '../services/dogs';
import DogDetail from '../components/DogDetail';
import './Dog-View.css';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
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
  }, [params.id, loading]);

  return (
    <>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div>
          <DogDetail dog={dog} />
        </div>
      )}
    </>
  );
}
