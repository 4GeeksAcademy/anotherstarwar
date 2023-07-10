import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/People";
import injectContext from "./store/appContext";
import { Planets } from "./views/Planets";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Vehicles } from "./views/vehicles";
import { Login } from "./component/login.js";
import { Signup } from "./component/signup.js";
import PrivateRoute from "./component/PrivateRoute";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:category/:theid" element={<People />} />
						<Route path="/planets/:theid" element={<Planets />} />
						<Route path="/vehicles/:theid" element={<Vehicles />} />
						<Route path="/login/" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/private" element={<PrivateRoute />} />

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
