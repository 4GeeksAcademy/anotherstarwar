import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetsDetail } from "../component/planetsDetail";
import PropTypes from 'prop-types';

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
   

    useEffect(() => {
        actions.loadinfoPlanets(params.theid);
    }, [])

    return (
       <div className="container-fluid">
        <PlanetsDetail>
           
        </PlanetsDetail>
       </div>
    );
};

Planets.propTypes = {
	match: PropTypes.object
};