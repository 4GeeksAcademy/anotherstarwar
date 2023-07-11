import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios"

export const Login = () => {
	 //declaramos un estado para cada uno de los inputs
	 const [email, setEmail] = useState("");
	 const [password, setPassword] = useState("");
	 const {actions}=useContext(Context)
	 const navigate = useNavigate();
   
	 async function login(e) {
	   e.preventDefault()
	   let isLogged = await actions.login(email,password);
	   if(isLogged){//true
		 setEmail("")
		 setPassword("")
		 navigate("/")
	   }
	 }
   
	 return (
		<div className="modal modal-signin position-static d-block py-5 text-center  " tabindex="-1" role="dialog" id="modalSignin">	
		<div className="modal-dialog" role="document">
			<div className="modal-content rounded-5 shadow border border-warning">
		<div className="text-center p-5 pb-4 " id='nav'>
      <h1 className="text-center"> Login </h1>
	   </div> 
	   <div className="modal-body bg-dark p-5 pt-0">
	   <form onSubmit={login}>
	  
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
		 <div className="row justify-content-center ">
		 <div className="col-6">
		 <button type="submit" className="btn  btn-outline-warning m-2">	
		   Login
		 </button>
		 </div>
		 <Link to={"/singup"}  className="text-warning m-2 "> Create an account</Link>	
		 
		 </div>
	   </form>
	   </div>
	   </div>
	   </div>
	   </div>
	 );
   };
