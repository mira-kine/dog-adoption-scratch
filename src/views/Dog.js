import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { deleteDog, fetchDogById } from '../services/dogs';
import DogDetail from '../components/DogDetail';
import './Dog-View.css';
import Header from '../components/Header/Header';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();

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

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(dog.id);
    alert("You've successfully deleted your dog");
    // window.location.replace('/');
    const redirect = () => {
      history.push('/');
    };
  };

  return (
    <>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div>
          <DogDetail dog={dog} handleDelete={handleDelete} />
          <Header />
        </div>
      )}
    </>
  );
}
