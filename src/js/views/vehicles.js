import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { VehiclesDetail } from "../component/vehiclesDetail";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
   

    useEffect(() => {
        actions.loadinfoVehicles(params.theid);
    }, [])

    return (
        <div className="container-fluid">
            <VehiclesDetail>

            </VehiclesDetail>
        </div>
    );
};