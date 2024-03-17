import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.jpg";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
