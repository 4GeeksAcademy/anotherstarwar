import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetail = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams();


    useEffect(() => {
        actions.loadinfoPeople(params.theid);
    }, [])

    console.log("props", props);
    console.log("store", store);

    if (!store.infoPeople || !Object.keys(store.infoPeople).length) {
        return (
            <p>loading</p>
        )
    }

    return (

        <div className="container card text-center P-3 m-3" style={{ maxWidth: "auto" }}>
            <div className="row">
                <div className="col-12 col-md-6 m-auto p-auto">
                    <img src={"https://starwars-visualguide.com/assets/img/characters/" + params.theid + ".jpg"} className="m-auto img-fluid rounded-start " style={{ width: "250px" }} />
                </div>
                <div className="col-12 col-md-6 m-auto p-auto">
                    <div className="card-body">
                        
                        <p >Nombre: {store.infoPeople.properties.name}</p>
                        <p >Año de nacimiento:{store.infoPeople.properties.birth_year}</p>
                        <p >Género: {store.infoPeople.properties.gender}</p>
                        <p >Altura :{store.infoPeople.properties.height}</p>
                        <p >Color de pelo :{store.infoPeople.properties.hair_color}</p>
                        <p >Color de ojos :{store.infoPeople.properties.eye_color}</p>
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