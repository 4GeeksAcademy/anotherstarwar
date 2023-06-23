import "../../styles/home.css";
import People from "../component/people";
import { RingLoader } from "react-spinners";



import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";




export const Home = () => {
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState (true)

	useEffect(() => {
		const timer = setTimeout(() => {
		  setLoading(false);
		}, 2000);
	
		return () => clearTimeout(timer);
	  }, []);
 


return(
	
	
	<div className="conatiner m-auto">	
	<div class="row justify-content-center">
	</div>
		<h1 className="text-center fs-1 bg-7 mt-2 text-warning"> <strong> Characters</strong></h1>
		<div className=" row flex-nowrap overflow-auto border text-center border-warning m-4">
		{store.people.length > 0 ? store.people.map((item, index)=> <People key={index++} id={index++} nombre={item.name} gender={item.gender} hairColor={item.hair_color} eyesColor={item.eye_color} ruta={"people"} />): null}
		</div>
		
		</div>
	
);
}