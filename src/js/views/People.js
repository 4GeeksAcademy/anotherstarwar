import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PeopleDetail } from "../component/peopleDetail";
import { RingLoader } from 'react-spinners';

export const People = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    

    useEffect(() => {
        actions.loadinfoPeople(params.theid);
    }, [])

    return (
       <div className="container-fluid">
        <PeopleDetail>
           
        </PeopleDetail>
       </div>
    );
};