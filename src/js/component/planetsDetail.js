import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const PlanetsDetail = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();


    useEffect(() => {
        actions.loadinfoPlanets(params.theid);
    }, [])


    if (!store.infoPlanets || !Object.keys(store.infoPlanets).length) {
        return (

            <p> <i className="fa fa-rocket text-danger" /></p>
        )
    }

    return (

        <div className="container card text-center P-3 m-3" style={{ maxWidth: "auto" }}>
            <div className="row">
                <div className="col-12 col-md-6 m-auto p-auto">
                    <img src={"https://starwars-visualguide.com/assets/img/planets/" + params.theid + ".jpg"} className="m-auto img-fluid rounded-start " style={{ width: "250px" }} />
                </div>
                <div className="col-12 col-md-6 m-auto p-auto">
                    <div className="card-body">

                        <p >Nombre: {store.infoPlanets.properties.name}</p>
                        <p >Descripción: {store.infoPlanets.description}</p>
                        <p >Clima:{store.infoPlanets.properties.climate}</p>
                        <p >Polucion: {store.infoPlanets.properties.population}</p>
                        <p >Orbita :{store.infoPlanets.properties.orbital_period}</p>
                        <p >Rotacion :{store.infoPlanets.properties.rotation_period}</p>
                        <p >Diametro :{store.infoPlanets.properties.diameter}</p>

                    </div>
                </div>
                <span className="border border-warning"></span>
            </div>

            <div className="row">
                <Link to="/">
                    <span className="btn btn-outline-warning" href="#" role="button">
                        Back home
                    </span>
                </Link>
            </div>
        </div>
    );
};