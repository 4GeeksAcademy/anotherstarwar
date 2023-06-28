import "../../styles/home.css";
import People from "../component/people";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";
import { RingLoader } from 'react-spinners';

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setLoading(false);
    }, 2000); 

  }, []);

  return (
	<div class="cielo-2">
		<div class="cielo-1">
    <div className="conatiner m-auto" style={{ backgroundColor: 'black' }}>
      {loading ? (
        <div className="spinner-container">
          <RingLoader color="#36d7b7" size={150}  />
		  <p style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>  Que la fuerza te acompañe</p>
        </div>
      ) : (
        <div>
          <div class="row justify-content-center"></div>
          <h1 className="text-center fs-1 bg-7 mt-2 text-warning">
            <strong> Personajes</strong>
          </h1>
          <div className="row flex-nowrap overflow-auto border text-center border-warning m-4">
            {store.people.length > 0 ? (
              store.people.map((item, index) => (
                <People
                  key={index++}
                  id={index++}
                  nombre={item.name}
                  gender={item.gender}
                  hairColor={item.hair_color}
                  eyesColor={item.eye_color}
                  ruta={"people"}
                />
              ))
            ) : (
              <p>Yo soy tu padre...</p>
            )}
          </div>

          <div class="row justify-content-center"></div>
          <h1 className="text-center fs-1 bg-7 mt-2 text-warning">
            <strong> Planetas</strong>
          </h1>
          <div className="row flex-nowrap overflow-auto border text-center border-warning m-4">
            {store.planets.length > 0 ? (
              store.planets.map((item, index) => (
                <Planets
                  key={index++}
                  id={index++}
                  nombre={item.name}
                  poblacion={item.population}
                  terreno={item.terrain}
                  ruta={"planets"}
                />
              ))
            ) : (
              <p>Yo soy tu padre...</p>
            )}
          </div>

          <div class="row justify-content-center"></div>
          <h1 className="text-center fs-1 bg-7 mt-2 text-warning">
            <strong> Vehiculos</strong>
          </h1>
          <div className="row flex-nowrap overflow-auto border text-center border-warning m-4">
            {store.vehicles.length > 0 ? (
              store.vehicles.map((item) => (
                <Vehicles
                  key={item.uid}
                  id={item.uid}
                  nombre={item.name}
                  ruta={"vehicles"}
                />
              ))
            ) : (
              <p>Yo soy tu padre...</p>
            )}
          </div>
        </div>
      )}
    </div>
	</div>
	</div>
  );
};
