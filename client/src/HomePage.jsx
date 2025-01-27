import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Onecar from './Onecar.jsx' 



function HomePage() {
    const [cars, setCars] = useState([]);
    const [refresh,setrefresh]=useState(true)
  
    useEffect(() => {
      axios.get('http://localhost:8080/car/getAll')
        .then((response) => {
          setCars(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [refresh]);
  
    return (
      <div className="container">
        <h1>Cars Models</h1>
        <ul>
          {cars.map(car => (
            <li key={car.id}>
                <img src={car.imageUrl} alt={car.name} />
              <div className="car-details">
                <h2>{car.name}</h2>
                <p>{car.description}</p>
                <p><strong>Model:</strong> {car.num_model}</p>
                <p><strong>Category:</strong> {car.categorie}</p>
                <p><strong>Price:</strong> {car.avg_price}</p>
                <p><strong>Horsepower:</strong> {car.avg_horsepower}</p>
              </div>
              <Onecar el={car} refresh={refresh} setrefresh={setrefresh} />
             
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HomePage;