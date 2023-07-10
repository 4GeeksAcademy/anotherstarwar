import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
	const [apellido, setApellido] = useState("");
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [registroExitoso, setRegistroExitoso] = useState(false); // Estado para controlar la visualización del mensaje
	const fecha_suscripcion = new Date();
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	async function handleSingup(e) {
		e.preventDefault();
		try {
			const response = await fetch("https://antoniomorales17-musical-space-guide-j6x9vqxw45qfprw5-3000.preview.app.github.dev/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					nombre: nombre,
					apellido: apellido,
					email: email,
					password: password,
					fecha_suscripcion: fecha_suscripcion
				})
			});

			if (response.ok) {
				const data = await response.json();
				setRegistroExitoso(true); // Actualizar el estado a true después de un registro exitoso
				setApellido("");
				setNombre("");
				setEmail("");
				setPassword("");
				setTimeout(() => {
					setRegistroExitoso(false); // Restablecer el estado después de cierto tiempo
					navigate("/"); // Redirigir a la página principal
				}, 3000); // Tiempo en milisegundos para mostrar el mensaje antes de redirigir
			} else {
				const errorData = await response.json();
				console.log(errorData);
				if (response.status === 401) {
					alert(errorData.msg);
				}
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="modal modal-signin position-static d-block py-5 text-center" tabIndex="-1" role="dialog" id="modalSignin">
			<div className="modal-dialog" role="document">
				<div className="modal-content rounded-5 shadow border border-warning">
					<div className="text-center p-5 pb-4" id="nav">
						<h1 className="text-center" style={{ color: "#fff" }}>Create account</h1>
					</div>
					<div className="modal-body bg-dark p-5 pt-0">
						{registroExitoso && (
							<div className="alert alert-success" role="alert">
								Registro exitoso. Serás redirigido a la página principal.
							</div>
						)}
						<form onSubmit={handleSingup}>
							<div className="form-control border border-ligth text-center text-ligth opacity-50 m-3">
								<input
									type="text"
									className="form-control"
									id="exampleInputnombre"
									aria-describedby="nombreHelp"
									placeholder="First Name"
									onChange={e => setNombre(e.target.value)}
									value={nombre}
								/>
								<div id="nombreHelp" className="form-text"></div>
							</div>

							<div className="form-control border border-ligth text-center text-ligth opacity-50 m-3">
								<input
									type="text"
									className="form-control"
									id="exampleInputapellido"
									aria-describedby="apellidoHelp"
									placeholder="Last Name"
									onChange={e => setApellido(e.target.value)}
									value={apellido}
								/>
								<div id="emailHelp" className="form-text"></div>
							</div>
							<div className="form-control border border-ligth text-center text-ligth opacity-50 m-3">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Email address"
									onChange={e => setEmail(e.target.value)}
									value={email}
								/>
								<div id="emailHelp" className="form-text"></div>
							</div>
							<div className="form-control border border-ligth text-center text-ligth opacity-50 m-3">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
									value={password}
								/>
							</div>
							<div className="row justify-content-center">
								<div className="col-sm-6 col-md-4 col-lg-2">
									<button type="submit" className="btn btn-outline-warning">
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
