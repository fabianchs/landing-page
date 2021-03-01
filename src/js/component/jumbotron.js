import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<hr className="my-4" />
			<p>{props.smalldescription} </p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	smalldescription: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};
