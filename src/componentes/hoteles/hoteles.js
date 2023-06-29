import React, { useEffect, useState } from 'react';
import './hoteles.css';
import Card from '../layout/card/card';

const Hoteles = ({ filtro }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [filtro]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/hoteles');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const filterData = async () => {
    try {

      const response = await fetch(`http://localhost:3000/api/hoteles/${filtro}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
      <div className="row">
        {data.map((hotel) => (
          <div className="col-md-4 col-sm-6" key={hotel.id}>
            <Card nombre={hotel.nombre} imagen={hotel.imagen} opiniones={hotel.opiniones} url={hotel.url}/>
          </div>
        ))}
      </div>
    
  );
};

export default Hoteles;
