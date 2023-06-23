import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png'
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<div className="ml-auto">
				<Link className="navbar-brand" to='/'>
					<img
						src={logo}
						className='img-fluid'
						style={{ width: '200px' }}
					/>
				</Link>
			</div>
			<div className="dropstart m-auto">
				<button className="btn btn-primary btn1 m-auto" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
					<strong>Favorites </strong>
				</button>
			</div>

		</nav>
	)
}