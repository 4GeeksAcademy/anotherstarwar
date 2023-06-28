import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer star-wars-bg text-white mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-rocket text-danger" /> by{" "}
			<Link to="https://github.com/antoniomorales17"> Antonio </Link>
		</p>
	</footer>
);