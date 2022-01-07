import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/Form/DogForm';
import Header from '../../components/Header/Header';
import { fetchDogById, updateDog } from '../../services/dogs';

export default function DogEdit() {
  const [selectedDog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      timer = setTimeout(() => {
        setLoading(false);
      }, 750);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [params.id, loading]);

  const updateDogValue = (key, value) => {
    selectedDog[key] = value;
    setDog({ ...selectedDog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog(selectedDog);
      alert('You added a dog!');
    } catch {
      alert('failed to update');
    }
  };

  return (
    <>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div>
          <Header />
          <DogForm
            selectedDog={{ ...selectedDog }}
            handleSubmit={handleSubmit}
            updateDogValue={updateDogValue}
          />
        </div>
      )}
    </>
  );
}
