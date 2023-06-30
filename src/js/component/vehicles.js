import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="col me-2">
            <div className=" card card-cover text-bg-dark" style={{ width: "15rem" }}>
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.id + ".jpg"} className="img-fluid" style={{ height: "18rem" }} alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{props.nombre} </h4>
                    <p className="d-none d-sm-none d-md-block">

                        <strong> Modelo: </strong>{props.model} <br />
                        <strong> Consumibles: </strong> {props.consumables} <br />



                    </p>
                    <div className="row">
                        <div className="col-6">
                            <Link to={"/vehicles/" + props.id} className="btn  btn-primary">Learn More!</Link>
                        </div>
                        <div className="col-6">
                            {<button type="button" onClick={() =>
                                actions.addFavorites
                                    ({ name: props.nombre, id: props.id, categoria: props.ruta })} className="btn btn-warning"><i className="fa fa-heart" /></button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Vehicles;