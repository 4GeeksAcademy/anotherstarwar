import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const VehiclesDetail = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();


    useEffect(() => {
        actions.loadinfoVehicles(params.theid);
    }, [])


    if (!store.infoVehicles || !Object.keys(store.infoVehicles).length) {
        return (

            <p> <i className="fa fa-rocket text-danger" /></p>
        )
    }

    return (

        <div className="container card text-center P-3 m-3" style={{ maxWidth: "auto" }}>
            <div className="row">
                <div className="col-12 col-md-6 m-auto p-auto">
                    <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + params.theid + ".jpg"} className="m-auto img-fluid rounded-start " style={{ width: "250px" }} />
                </div>
                <div className="col-12 col-md-6 m-auto p-auto">
                    <div className="card-body">

                        <p >Nombre: {store.infoVehicles.properties.name}</p>
                        <p >Descripción: {store.infoVehicles.description}</p>
                        <p >Model:{store.infoVehicles.properties.model}</p>
                        <p >Lenght: {store.infoVehicles.properties.length}</p>
                        <p >Passangers :{store.infoVehicles.properties.passengers}</p>
                        <p >Capacidad :{store.infoVehicles.properties.cargo_capacity}</p>
                        <p >Crew :{store.infoVehicles.properties.crew}</p>


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