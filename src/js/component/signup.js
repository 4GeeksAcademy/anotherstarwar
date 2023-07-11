import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
    //declaramos un estado para cada uno de los inputs
	const [apellido, setApellido] = useState("");
	const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const fecha_suscripcion  = new Date();
    const {actions}=useContext(Context)
    const navigate = useNavigate();
	console.log(fecha_suscripcion)
    async function handleSingup(e) {
      e.preventDefault()
      console.log(email,password);
      let isLogged = await actions.signup(email,password,nombre,apellido,fecha_suscripcion);
      if(isLogged){//true
        setEmail("")
        setPassword("")
		setApellido("")
		setNombre("")
        navigate("/login")
      }
    }
   
	 return (
		<div className="modal modal-signin position-static d-block py-5 text-center  " tabindex="-1" role="dialog" id="modalSignin">	
		<div className="modal-dialog" role="document">
			<div className="modal-content rounded-5 shadow border border-warning">
		<div className="text-center p-5 pb-4 " id='nav'>
      <h1 className="text-center"> Create account  </h1>
	   </div> 
	   <div className="modal-body bg-dark p-5 pt-0">
	   <form onSubmit={handleSingup}>
	   <div className="form-control  border border-ligth text-center text-ligth opacity-50 m-3">
		 <input
		   type="nombre"
		   className="form-control"
		   id="exampleInputnombre"
		   aria-describedby="nombrelHelp"
		   placeholder='First Name'
		   onChange={(e)=>setNombre(e.target.value)}
		   value={nombre}
		 />
		 <div id="nombreHelp" className="form-text">
		   
		 </div>
	   </div>

	   <div className="form-control  border border-ligth text-center text-ligth opacity-50 m-3">
		 <input
		   type="apellido"
		   className="form-control"
		   id="exampleInputapellido"
		   aria-describedby="apellidoHelp"
		   placeholder='Last name'
		   onChange={(e)=>setApellido(e.target.value)}
		   value={apellido}
		 />
		 <div id="emailHelp" className="form-text">
		   
		 </div>
	   </div>
		 <div className="form-control  border border-ligth text-center text-ligth opacity-50 m-3">
		 
		   <input
			 type="email"
			 className="form-control"
			 id="exampleInputEmail1"
			 aria-describedby="emailHelp"
			 placeholder='Email address'
			 onChange={(e)=>setEmail(e.target.value)}
			 value={email}
		   />
		   <div id="emailHelp" className="form-text">
			 
		   </div>
		 </div>
		 <div className="form-control  border border-ligth text-center text-ligth opacity-50 m-3">
		   
		   <input
			 type="password"
			 className="form-control"
			 id="exampleInputPassword1"
			 placeholder='Password'
			 onChange={(e)=>setPassword(e.target.value)}
			 value={password}
		   />
		 </div>
		 <div className="row justify-content-center">
		 <div className="col-sm-6 col-md-4 col-lg-2">
		 <button type="submit" className="btn  btn-outline-warning">
		 Register
		 </button>
		 </div>
		 </div>
	   </form>
	   </div>
	   </div>
	   </div>
	   </div>
	 );
   };